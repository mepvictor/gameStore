package br.com.gamestore.gamestore.controllers;

import br.com.gamestore.gamestore.entities.User;
import br.com.gamestore.gamestore.resourceItems.LoginFormResorceItem;
import br.com.gamestore.gamestore.resourceItems.dto.UserDto;
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
    public ResponseEntity<?> login(@RequestBody LoginFormResorceItem loginForm) throws Throwable {
        UserDto userItem =  userService.findByUser(loginForm);
        return ResponseEntity.ok(userItem);
    }
}
