package com.portfolio.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.portfolio.api.dto.ProjectDTO;
import com.portfolio.api.dto.ProjectInsertDTO;
import com.portfolio.api.entity.Photo;
import com.portfolio.api.entity.Project;
import com.portfolio.api.service.PhotoService;
import com.portfolio.api.service.ProjectService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/projects")
public class ProjectController {

	@Autowired
	private ProjectService projectService;

	@Autowired
	private PhotoService photoService;

	@Operation(summary = "Lista todos os produtos cadastrados", description = "Retorna uma lista de todos os produtos cadastrados no sistema, com detalhes completos sobre cada produto.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de produtos retornada com sucesso", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Project.class))),
			@ApiResponse(responseCode = "400", description = "Erro na requisição.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "401", description = "Erro na autenticação.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "404", description = "Nenhum produto encontrado.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", example = "{\"error\": \"Internal Server Error\", \"message\": \"Ocorreu um erro inesperado.\"}"))) })

	@GetMapping
	public ResponseEntity<List<ProjectDTO>> listProjects() {
		return ResponseEntity.ok(projectService.listAll());
	}

	@Operation(summary = "Lista um produto pelo ID", description = "Retorna os detalhes de um produto específico identificado pelo seu ID.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Produto encontrado com sucesso", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Project.class))),
			@ApiResponse(responseCode = "400", description = "Erro na requisição.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "401", description = "Erro na autenticação.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "404", description = "Produto não encontrado.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", example = "{\"error\": \"Internal Server Error\", \"message\": \"Ocorreu um erro inesperado.\"}"))) })

	@GetMapping("/{id}")
	public ResponseEntity<ProjectDTO> searchById(@PathVariable Long id) {
		return ResponseEntity.ok(projectService.getById(id));
	}

	@Operation(summary = "Cadastra um novo produto", description = "Realiza o cadastro de um produto fornecendo as informações necessárias, como nome, descrição, preço, categoria, estoque e foto.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Produto cadastrado com sucesso", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Project.class))),
			@ApiResponse(responseCode = "400", description = "Erro na requisição.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "401", description = "Erro na autenticação.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "404", description = "Produto não encontrado.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", example = "{\"error\": \"Internal Server Error\", \"message\": \"Ocorreu um erro inesperado.\"}"))) })
	@PostMapping
	public ResponseEntity<ProjectDTO> create(@RequestPart MultipartFile file,
			@RequestPart ProjectInsertDTO projectInsert) {
		return ResponseEntity.ok(projectService.save(projectInsert, file));
	}

	@Operation(summary = "Altera um produto existente", description = "Realiza a atualização das informações de um produto específico identificado pelo seu ID.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Produto atualizado com sucesso", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Project.class))),
			@ApiResponse(responseCode = "400", description = "Erro na requisição.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "401", description = "Erro na autenticação.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "404", description = "Produto não encontrado.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", example = "{\"error\": \"Internal Server Error\", \"message\": \"Ocorreu um erro inesperado.\"}"))) })

	@PutMapping("/{id}")
	public ResponseEntity<ProjectDTO> update(@PathVariable Long id, MultipartFile file,
			@RequestPart ProjectInsertDTO projectInsert) {
		return ResponseEntity.ok(projectService.update(id, projectInsert, file));
	}

	@Operation(summary = "Deleta um produto", description = "Remove um produto do sistema fornecendo o seu ID.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Produto deletado com sucesso", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Project.class))),
			@ApiResponse(responseCode = "400", description = "Erro na requisição.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "401", description = "Erro na autenticação.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "404", description = "Produto não encontrado.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", example = "{\"error\": \"Internal Server Error\", \"message\": \"Ocorreu um erro inesperado.\"}"))) })

	@DeleteMapping("/{id}")
	public ResponseEntity<String> delete(@PathVariable Long id) {
		return ResponseEntity.ok(projectService.delete(id));
	}

	@Operation(summary = "Busca a foto de um produto", description = "Retorna a foto de um produto específico identificando-o pelo seu ID.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Foto do produto retornada com sucesso", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Photo.class))),
			@ApiResponse(responseCode = "400", description = "Erro na requisição.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "401", description = "Erro na autenticação.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "404", description = "Produto não encontrado.", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", nullable = true))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", schema = @Schema(type = "object", example = "{\"error\": \"Internal Server Error\", \"message\": \"Ocorreu um erro inesperado.\"}"))) })

	@GetMapping("/photo/{id}")
	public ResponseEntity<byte[]> buscarFoto(@PathVariable Long id) {
		Photo photo = photoService.searchByProject(id);
		HttpHeaders headers = new HttpHeaders();
		headers.add(HttpHeaders.CONTENT_TYPE, photo.getTypes());
		headers.add(HttpHeaders.CONTENT_LENGTH, String.valueOf(photo.getDatas().length));
		return new ResponseEntity<>(photo.getDatas(), headers, HttpStatus.OK);
	}
}
