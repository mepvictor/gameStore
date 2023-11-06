package br.com.gamestore.gamestore.resourceItems.dto;

import br.com.gamestore.gamestore.entities.Purchase;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class PurchaseDto {
    private Integer id;
    private LocalDateTime purchaseDate;
    private List<ProductPuchaseDto> products = new ArrayList<>();


    public PurchaseDto(Purchase purchase) {
        this.id = purchase.getId();
        this.purchaseDate = purchase.getPurchaseDate();
        purchase.getPurchaseProducts().forEach(product ->
                this.products.add(new ProductPuchaseDto(product.getProduct(), product.getQuantity()))
        );
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDateTime getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(LocalDateTime purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    public List<ProductPuchaseDto> getProducts() {
        return products;
    }

    public void setProducts(List<ProductPuchaseDto> products) {
        this.products = products;
    }
}
