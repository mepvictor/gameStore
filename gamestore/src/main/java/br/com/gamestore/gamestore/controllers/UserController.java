package br.com.gamestore.gamestore.controllers;

import br.com.gamestore.gamestore.entities.Purchase;
import br.com.gamestore.gamestore.entities.User;
import br.com.gamestore.gamestore.resourceItems.LoginFormResorceItem;
import br.com.gamestore.gamestore.resourceItems.dto.PurchaseDto;
import br.com.gamestore.gamestore.resourceItems.dto.UserDto;
import br.com.gamestore.gamestore.services.PurchaseService;
import br.com.gamestore.gamestore.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private PurchaseService purchaseService;

    @GetMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody LoginFormResorceItem loginForm) throws Throwable {
        Optional<User> userItem = userService.findByUser(loginForm);
        userItem.get().setPurchases(purchaseService.findAllByUserId(userItem.get().getId()));
        UserDto userDto = new UserDto(userItem);
        return ResponseEntity.ok(userDto);
    }

    @GetMapping(value = "/purchases")
    public ResponseEntity<?> getPurchasesByUser(@RequestParam Integer userId) {
        List<Purchase> purchaseList = purchaseService.findAllByUserId(userId);
        if (purchaseList.isEmpty()) {
            return ResponseEntity.notFound().header("message",
                    "Nenhuma compra foi encontrada para usuario id:".concat(String.valueOf(userId))).build();
        }
        List<PurchaseDto> purchaseDtos = purchaseList.stream()
                .map(PurchaseDto::new)
                .collect(Collectors.toList());
        return ResponseEntity.ok(purchaseDtos);
    }
}
