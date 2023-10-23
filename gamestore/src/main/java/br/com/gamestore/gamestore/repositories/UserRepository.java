package br.com.gamestore.gamestore.repositories;

import br.com.gamestore.gamestore.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUsernameAndPassword(String username, String password);
}
