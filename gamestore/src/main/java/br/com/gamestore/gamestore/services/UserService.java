package br.com.gamestore.gamestore.services;

import br.com.gamestore.gamestore.entities.User;
import br.com.gamestore.gamestore.repositories.UserRepository;
import br.com.gamestore.gamestore.resourceItems.UserResourceItem;
import br.com.gamestore.gamestore.resourceItems.UserResponseItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public UserResponseItem findByUser(UserResourceItem userResourceItem) {
        User userEntity = userRepository.findByUsernameAndPassword(userResourceItem.getUsername(), userResourceItem.getPassword());
        UserResponseItem userResponseItem = new UserResponseItem(userEntity);
        return userResponseItem;
    }
}
