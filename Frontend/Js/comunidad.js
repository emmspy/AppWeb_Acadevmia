document.addEventListener("DOMContentLoaded", function () {
  const Preguntas = JSON.parse(localStorage.getItem("preguntas")) || [];

  /* const preguntas = [
    {
      pregunta: "¿Como puedo crear un array en js?",
      descripcion:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido u",
      tags: "javascript",
    },
    {
      pregunta: "¿Como puedo crear un array en js?",
      descripcion:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido u",
      tags: "javascript",
    },
  ];
  localStorage.setItem("preguntas", JSON.stringify(preguntas)); */

  function renderPreguntas(preguntas) {
    let preguntasHtml = "";

    preguntas.forEach(function (obj, index) {
      preguntasHtml += `
    <div class="foro__publicadas">
      <div class="foro__pregunta">
          <img src="../../publics/img/user.png">
          <p>${obj.user}</p>
          <button class="foro__reaccion" id="btn__like" onclick="contadorLike(${index})"><i class='bx bx-like'></i></button>
          <button class="foro__reaccion" id="btn__dislike" onclick="contadorDislike(${index})"><i class='bx bx-dislike' ></i></button>
          <a href="/Frontend/pages/comunidadRespuesta.html?id=${index}" class="foro__ref">
          <h3>${obj.pregunta}</h3>
          <p>${obj.tags}</p>
          </a>
      </div>
    </div>`;
    });
    document.querySelector(".body__preguntas").innerHTML = preguntasHtml;
  }
  renderPreguntas(Preguntas);

  const btnPregunta = document.getElementById("btn__pregunta");
  btnPregunta.addEventListener("click", function () {
    // Verificar si el usuario ha iniciado sesión (aquí debes implementar tu lógica de autenticación)
    const user = JSON.parse(localStorage.getItem("login_success")) || false;
    if (!user) {
      window.location.href = "login.html"; // Redirigir a login.html si el usuario no ha iniciado sesión
    }
  });
  function filtro(consulta) {
    return Preguntas.filter((pregunta) =>
      pregunta.pregunta.toLowerCase().includes(consulta.toLowerCase())
    );
  }
  const consulta = document.getElementById("buscador");
  consulta.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const consultaTexto = consulta.value;
      const resultadoFiltro = filtro(consultaTexto);
      renderPreguntas(resultadoFiltro);
    }
  });

  let likes = [];
  let dislikes = [];
  // const reaccionLike = document.getElementById("btn__like");
  // reaccionLike.addEventListener("click",function(index){
  //     if (likes[index]) {
  //       likes[index] += 1;
  //   } else {
  //       likes[index] = 1;
  //   }
  // })
  // const reaccionDislike = document.getElementById("btn__dislike");
  // reaccionDislike.addEventListener("click",function(index){
  //   if (dislikes[index]) {
  //     dislikes[index] += 1;
  //   } else {
  //     dislikes[index] = 1;
  //   }
  // })

  function contadorLike(index) {
    if (likes[index]) {
      likes[index] += 1;
    } else {
      likes[index] = 1;
    }
  }
  function contadorDislike(index) {
    if (dislikes[index]) {
      dislikes[index] += 1;
    } else {
      dislikes[index] = 1;
    }
  }
});
