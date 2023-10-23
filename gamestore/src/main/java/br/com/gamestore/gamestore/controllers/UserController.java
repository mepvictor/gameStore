package br.com.gamestore.gamestore.controllers;

import br.com.gamestore.gamestore.resourceItems.UserResourceItem;
import br.com.gamestore.gamestore.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody UserResourceItem userResourceItem){
        userService.findByUser(userResourceItem);
        return ResponseEntity.ok("{deu bão}");
    }
}
