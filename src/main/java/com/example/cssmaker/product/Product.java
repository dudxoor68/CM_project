package com.example.cssmaker.product;

import jakarta.persistence.*;


@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="productNum")
    private int productNum;

    @Column(length = 50, nullable = false)
    private String productTitle;

    @Column(length = 1000)
    private String productHtml;

    @Column(length = 1000)
    private String productCss;

    @Column(length = 10)
    private String productWriter;



    public int getProductNum() {
        return productNum;
    }

    public void setProductNum(int productNum) {
        this.productNum = productNum;
    }

    public String getProductTitle() {return productTitle;}

    public void setProductTitle(String productName) {
        this.productTitle = productName;
    }

    public String getProductHtml() {
        return productHtml;
    }

    public void setProductHtml(String productHtml) {
        this.productHtml = productHtml;
    }

    public String getProductCss() {
        return productCss;
    }

    public void setProductCss(String productCss) {
        this.productCss = productCss;
    }

    public String getProductWriter() {
        return productWriter;
    }

    public void setProductWriter(String productWriter) {
        this.productWriter = productWriter;
    }

}

