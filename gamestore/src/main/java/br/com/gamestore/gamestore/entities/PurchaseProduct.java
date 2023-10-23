package br.com.gamestore.gamestore.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "tb_purchase_product")
public class PurchaseProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "purchase_product_id")
    private Integer purchaseProductId;

    @JoinColumn(name = "purchase_id")
    private Integer purchaseId;

    @JoinColumn(name = "product_id")
    private Integer productId;

    @ManyToMany
    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    private List<Product> products;

    public Integer getPurchaseProductId() {
        return purchaseProductId;
    }

    public void setPurchaseProductId(Integer purchaseProductId) {
        this.purchaseProductId = purchaseProductId;
    }

    public Integer getPurchaseId() {
        return purchaseId;
    }

    public void setPurchaseId(Integer purchaseId) {
        this.purchaseId = purchaseId;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }
}
