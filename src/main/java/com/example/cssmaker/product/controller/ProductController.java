package com.example.cssmaker.product.controller;

import com.example.cssmaker.product.Product;
import com.example.cssmaker.product.service.ProductService;
import com.fasterxml.jackson.databind.JsonNode;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

        return product;
    }

//    @RequestMapping("api/Create")
//    public Product ProductView(@RequestParam(name = "after", required = false) String after,
//                               @RequestParam(name = "num", required = false) Integer num){   //Integer 대신 int 사용시 오류
//        Product product = new Product();
//        if(after!= null && after.equals("view")){
//            product = productService.ViewProduct(num);
//        }
//
//        System.out.println(product);
//        System.out.println(after);
//        System.out.println(num);
//        return product;
//    }


    @PostMapping("api/Create")
    public Product handlePostRequest(@RequestBody(required = false) JsonNode requestBody) {
        // requestBody를 사용하여 서버 측에서의 로직 수행
        String after = requestBody.get("after").asText();
        int num = requestBody.get("num").asInt();

        Product product = productService.ViewProduct(num);
        System.out.println(product);
        return product;
    }

}
