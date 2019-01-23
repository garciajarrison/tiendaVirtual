package com.tiendavirtual.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.tiendavirtual.business.IMisProductosRepository;
import com.tiendavirtual.model.MisProductos;


@RestController
@RequestMapping("/misProductos")
@CrossOrigin("*")

public class MisProductosController {
	
	@Autowired
	IMisProductosRepository misProductosBusiness;
	
	//Consultar por id
	@GetMapping(value="/{id", produces = "application/json")
	@ResponseBody
	public MisProductos consultarporId(@PathVariable Integer id) {
		return misProductosBusiness.findById(id).orElse(new MisProductos());
	}
	
	//consultar todos
	@GetMapping("/")
	@ResponseBody
	public List<MisProductos> consultarTodas(){
		return (List<MisProductos>) misProductosBusiness.findAll();
	}
	
	//Crear registro save
	@PostMapping("/crear/")
	public MisProductos crearMiProducto(@Valid @RequestBody MisProductos misProductos) {
		return misProductosBusiness.save(misProductos);
	}
	
	//Actulizar registro
	@PutMapping("/actualizar/{id}")
	public MisProductos updateNote(@PathVariable(value = "id") Integer misProductosId,
							@Valid @RequestBody MisProductos misProductosDetails ) {
		
		MisProductos misProductos = misProductosBusiness.findById(misProductosId)
				.orElseThrow(() -> new ResourceNotFoundException());
		
		misProductos.setNombre(misProductosDetails.getNombre());
		misProductos.setProducto(misProductosDetails.getProducto());
		
		MisProductos upMisProductos = misProductosBusiness.save(misProductos);
		return upMisProductos;

	}
								

}
