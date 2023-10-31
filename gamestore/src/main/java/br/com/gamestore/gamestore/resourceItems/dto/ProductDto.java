package br.com.gamestore.gamestore.resourceItems.dto;

import br.com.gamestore.gamestore.entities.Product;

public class ProductDto {
    private Integer id;
    private String productName;
    private String productDesc;
    private Double productPrice;


    public ProductDto(Product product) {
        this.id = product.getId();
        this.productName = product.getProductName();
        this.productDesc = product.getProductDesc();
        this.productPrice = product.getProductPrice();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDesc() {
        return productDesc;
    }

    public void setProductDesc(String productDesc) {
        this.productDesc = productDesc;
    }

    public Double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(Double productPrice) {
        this.productPrice = productPrice;
    }
}
