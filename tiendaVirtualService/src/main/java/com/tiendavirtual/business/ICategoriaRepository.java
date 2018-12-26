package com.tiendavirtual.business;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.tiendavirtual.model.Categoria;

@RepositoryRestResource(collectionResourceRel = "categoria", path = "categoria")
public interface ICategoriaRepository extends PagingAndSortingRepository<Categoria, Integer> {

	List<Categoria> findByLastName(@Param("name") String name);

}
