package com.tiendavirtual.controller;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tiendavirtual.business.ICategoriaRepository;
import com.tiendavirtual.model.Categoria;

@Controller
@RequestMapping("/categoria")
public class CategoriaController {
	
	private ICategoriaRepository categoriaBusiness;

	@GetMapping(value="/{id}", produces = "application/json")
    @ResponseBody
    public Categoria consultarPorId(@PathVariable Integer id) {
    	return categoriaBusiness.findById(id).orElse(new Categoria());
    }
	
	@GetMapping("/")
    @ResponseBody
    public List<Categoria> consultarTodas() {
    	return (List<Categoria>) categoriaBusiness.findAll();
    }
    

}