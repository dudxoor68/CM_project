package com.example.cssmaker.product.jpa;

import com.example.cssmaker.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.lang.reflect.Array;

@Repository
public interface InterfaceProduct extends JpaRepository<Product, Integer> {

}
