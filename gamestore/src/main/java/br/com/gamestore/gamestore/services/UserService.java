package br.com.gamestore.gamestore.services;

import br.com.gamestore.gamestore.entities.Purchase;
import br.com.gamestore.gamestore.entities.User;
import br.com.gamestore.gamestore.repositories.PurchaseRepository;
import br.com.gamestore.gamestore.repositories.UserRepository;
import br.com.gamestore.gamestore.resourceItems.LoginFormResorceItem;
import br.com.gamestore.gamestore.resourceItems.dto.UserDto;
import br.com.gamestore.gamestore.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PurchaseRepository purchaseRepository;

    public UserDto findByUser(LoginFormResorceItem userResourceItem) throws Throwable {
        Optional<User> userEntity = userRepository.findByUsernameAndPassword(userResourceItem.getUsername(), userResourceItem.getPassword());
        userEntity.orElseThrow(() -> new ObjectNotFoundException("Login não encontrado"));
        userEntity.get().setPurchases(purchaseRepository.findAllByUserId(userEntity.get().getId()));
        return new UserDto(userEntity);
    }
}
