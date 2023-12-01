package com.example.cssmaker.product.service;

import com.example.cssmaker.product.Product;

import java.util.List;

public interface InterfaceProductService {

    void SaveCode(Product product);

    List<Product> ProductList();
}
