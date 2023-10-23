package br.com.gamestore.gamestore.services;

import br.com.gamestore.gamestore.repositories.UserRepository;
import br.com.gamestore.gamestore.resourceItems.UserResourceItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public void findByUser(UserResourceItem userResourceItem) {
        userRepository.findByUsernameAndPassword(userResourceItem.getUsername(), userResourceItem.getPassword());
    }
}
