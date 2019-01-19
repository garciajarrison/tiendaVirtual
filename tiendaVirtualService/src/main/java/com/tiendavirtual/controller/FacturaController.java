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

import com.tiendavirtual.business.IFacturaRepository;
import com.tiendavirtual.model.Factura;

@RestController
@RequestMapping("/factura")
@CrossOrigin("*")
public class FacturaController {
	
	@Autowired
	IFacturaRepository facturaBusiness;

	//Consultar por id
	@GetMapping(value="/{id}", produces = "application/json")
    @ResponseBody
    public Factura consultarPorId(@PathVariable Integer id) {
    	return facturaBusiness.findById(id).orElse(new Factura());
    }
	
	//Consultar todos
	@GetMapping("/")
    @ResponseBody
    public List<Factura> consultarTodas() {
    	return (List<Factura>) facturaBusiness.findAll();
    }
	
	//Crear registro Save
	@PostMapping("/crear/")
	public Factura crearFactura(@Valid @RequestBody Factura factura) {
	    return facturaBusiness.save(factura);
	}
	
	//Actualizar registro
	@PutMapping("/actualizar/{id}")
	public Factura updateNote(@PathVariable(value = "id") Integer facturaId,
	                       @Valid @RequestBody Factura facturaDetails) {

		Factura factura = facturaBusiness.findById(facturaId)
	            .orElseThrow(() -> new ResourceNotFoundException());

		factura.setFecha(facturaDetails.getFecha());
		factura.setTotal(facturaDetails.getTotal());

		Factura updatedFactura = facturaBusiness.save(factura);
	    return updatedFactura;
	}
	
	//Borrar Categoria
	@DeleteMapping("/borrar/{id}")
	public ResponseEntity<?> deleteNote(@PathVariable(value = "id") Integer facturaId) {
		Factura factura = facturaBusiness.findById(facturaId)
	            .orElseThrow(() -> new ResourceNotFoundException());

		facturaBusiness.delete(factura);
	    return ResponseEntity.ok().build();
	}

}
