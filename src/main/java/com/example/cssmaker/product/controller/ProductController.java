package com.example.cssmaker.product.controller;

import com.example.cssmaker.product.Product;
import com.example.cssmaker.product.service.ProductService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000/")
@RequestMapping("/")
public class ProductController {

    @Autowired
    ProductService productService;

    @RequestMapping("api/codesave")
    public void ProductSave(@RequestParam String productWriter, @RequestParam String productTitle, @RequestParam String productHtml, @RequestParam String productCss, HttpServletResponse response) throws IOException {
        Product product = new Product();
        product.setProductWriter(productWriter);
        product.setProductTitle(productTitle);
        product.setProductHtml(productHtml);
        product.setProductCss(productCss);

        productService.SaveCode(product);

        response.sendRedirect("/#/Create?after=save");
    }

    @RequestMapping("api/Main")
    public List<Product> ProductList(){
        List<Product> product = productService.ProductList();

        System.out.println("main");
        return product;
    }


}
