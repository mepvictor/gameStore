package br.com.gamestore.gamestore.resourceItems;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;


public class UserResourceItem {

    @NotNull
    @JsonProperty("username")
    private String username;

    @NotNull
    @JsonProperty("password")
    private String password;

    public UserResourceItem() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
