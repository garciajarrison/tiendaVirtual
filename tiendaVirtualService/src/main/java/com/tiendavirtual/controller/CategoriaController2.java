package com.tiendavirtual.controller;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tiendavirtual.business.ICategoriaRepository;
import com.tiendavirtual.model.Categoria;

@RestController
public class CategoriaController2 {
	
	private ICategoriaRepository categoriaBusiness;

	@GetMapping("/categoria")
    public List<Categoria> greeting() {
		return (List<Categoria>) categoriaBusiness.findAll();
    }

}