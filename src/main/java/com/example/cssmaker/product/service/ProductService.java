package com.example.cssmaker.product.service;

import com.example.cssmaker.product.Product;
import com.example.cssmaker.product.jpa.InterfaceProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements InterfaceProductService{

    @Autowired
    InterfaceProduct iproduct;

    @Override
    public void SaveCode(Product product){
        iproduct.save(product);
    }

    @Override
    public List<Product> ProductList(){
        List<Product> product = iproduct.findAll();
        return product;
    }

}
