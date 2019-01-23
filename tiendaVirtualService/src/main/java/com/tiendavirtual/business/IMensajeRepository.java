package com.tiendavirtual.business;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tiendavirtual.model.Mensaje;
import com.tiendavirtual.model.Producto;

@Repository
public interface IMensajeRepository extends JpaRepository<Mensaje, Integer> {
	

}
