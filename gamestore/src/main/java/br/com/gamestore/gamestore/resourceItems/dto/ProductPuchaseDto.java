package br.com.gamestore.gamestore.resourceItems.dto;

import br.com.gamestore.gamestore.entities.Product;

public class ProductPuchaseDto extends ProductDto {

    private Integer quantity;

    public ProductPuchaseDto(Product product, int quantity) {
        super(product);
        this.quantity = quantity;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
