package br.com.gamestore.gamestore.repositories;

import br.com.gamestore.gamestore.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
