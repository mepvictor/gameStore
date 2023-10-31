package br.com.gamestore.gamestore.resourceItems.dto;

import br.com.gamestore.gamestore.entities.User;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class UserDto {
    private Integer id;
    private String username;
    private List<PurchaseDto> purchases = new ArrayList<>();

    public UserDto(Optional<User> user) {
        if (user.isPresent()) {
            this.id = user.get().getId();
            this.username = user.get().getUsername();
            user.get().getPurchases().forEach(purchase ->
                    this.purchases.add(new PurchaseDto(purchase))
            );
        }
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<PurchaseDto> getPurchases() {
        return purchases;
    }

    public void setPurchases(List<PurchaseDto> purchases) {
        this.purchases = purchases;
    }
}

