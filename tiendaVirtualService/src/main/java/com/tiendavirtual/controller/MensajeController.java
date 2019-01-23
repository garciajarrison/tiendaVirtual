package com.tiendavirtual.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.tiendavirtual.business.IMensajeRepository;
import com.tiendavirtual.model.Mensaje;

@RestController
@RequestMapping("/mensaje")
@CrossOrigin("*")

public class MensajeController {
	
	@Autowired
	IMensajeRepository mensajeBusiness;
	
	//consultar por id
	@GetMapping(value="/{id}", produces = "application/json")
	@ResponseBody
	
	public Mensaje consultarPorId(@PathVariable Integer id) {
		return mensajeBusiness.findById(id).orElse(new Mensaje());
	}
	
	//consultar todos
	@GetMapping(value="/")
	@ResponseBody
	public List<Mensaje> consultarTodas(){
		return (List<Mensaje>) mensajeBusiness.findAll();
	}
	
	//Crear registro save
	@PostMapping("/crear/")
	public Mensaje crearMensaje(@Valid @RequestBody Mensaje mensaje) {
		return mensajeBusiness.save(mensaje);
	}
	
	
	
	 
	
	

}
