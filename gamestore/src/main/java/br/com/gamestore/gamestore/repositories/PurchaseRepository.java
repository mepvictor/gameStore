package br.com.gamestore.gamestore.repositories;

import br.com.gamestore.gamestore.entities.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchaseRepository extends JpaRepository<Purchase, Integer> {
    List<Purchase> findAllByUserId(Integer id);
}
