package br.com.gamestore.gamestore.services;

import br.com.gamestore.gamestore.entities.User;
import br.com.gamestore.gamestore.repositories.UserRepository;
import br.com.gamestore.gamestore.resourceItems.LoginFormResorceItem;
import br.com.gamestore.gamestore.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> findByUser(LoginFormResorceItem userResourceItem) throws Throwable {
        Optional<User> userEntity = userRepository.findByUsernameAndPassword(userResourceItem.getUsername(), userResourceItem.getPassword());
        return Optional.ofNullable(userEntity.orElseThrow(() -> new ObjectNotFoundException("Login não encontrado")));
    }
}
