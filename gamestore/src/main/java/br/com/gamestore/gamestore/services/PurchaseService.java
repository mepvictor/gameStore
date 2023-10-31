package br.com.gamestore.gamestore.services;

import br.com.gamestore.gamestore.entities.Purchase;
import br.com.gamestore.gamestore.repositories.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurchaseService {

    @Autowired
    private PurchaseRepository purchaseRepository;

    public List<Purchase> findAllByUserId(Integer id) {
        return purchaseRepository.findAllByUserId(id);
    }
}
