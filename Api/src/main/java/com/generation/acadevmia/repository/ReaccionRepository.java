package com.generation.acadevmia.repository;

import com.generation.acadevmia.model.GroceryItem;
import com.generation.acadevmia.model.Reaccion;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ReaccionRepository extends MongoRepository<Reaccion, String> {

    @Query("{name:'?0'}")
    GroceryItem findItemByName(String name);

    @Query(value="{category:'?0'}", fields="{'name' : 1, 'quantity' : 1}")
    List<GroceryItem> findAll(String category);

    public long count();

}
