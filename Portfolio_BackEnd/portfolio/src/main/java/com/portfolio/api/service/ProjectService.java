package com.portfolio.api.service;

import java.io.IOException;
import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.portfolio.api.dto.ProjectDTO;
import com.portfolio.api.dto.ProjectInsertDTO;
import com.portfolio.api.entity.Project;
import com.portfolio.api.exception.NotFoundException;
import com.portfolio.api.repository.ProjectRepository;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository projectRepository;

	@Autowired
	private PhotoService photoService;

	public List<ProjectDTO> listAll() {

		return projectRepository.findAll().stream().map(ProjectDTO::new).collect(Collectors.toList());

	}

	public ProjectDTO getById(Long id) {
		Optional<Project> projectOpt = projectRepository.findById(id);
		if (projectOpt.isPresent()) {
			return new ProjectDTO(projectOpt.get());
		}
		throw new NotFoundException("Projeto não encontrado");
	}

	@Transactional
	public ProjectDTO save(ProjectInsertDTO projectInsert, MultipartFile file) {
		Project project = new Project();
		try {
			project.setTitle(projectInsert.getTitle());
			project.setTitleEnglish(projectInsert.getTitleEnglish());
			project.setDescription(projectInsert.getDescription());
			project.setDescriptionEnglish(projectInsert.getDescriptionEnglish());
			project.setTechnologies(projectInsert.getTechnologies());
			project.setLink(projectInsert.getLink());
			project.setGithubLink(projectInsert.getGithubLink());
			projectRepository.save(project);
			project.setImage(projectInsert.getImage());
			photoService.inserir(project, file);

		} catch (IOException e) {
			e.printStackTrace();
		}
		return addPhotoUri(project);

	}

	public ProjectDTO update(Long id, ProjectInsertDTO projectInsert, MultipartFile file) {
		Optional<Project> projectOpt = projectRepository.findById(id);
		if (projectOpt.isEmpty()) {
			throw new NotFoundException("Projeto não encontrado");
		}

		Project project = projectOpt.get();
		project.setId(id);
		project.setTitle(projectInsert.getTitle() != null ? projectInsert.getTitle() : projectOpt.get().getTitle());
		project.setTitleEnglish(projectInsert.getTitleEnglish() != null ? projectInsert.getTitleEnglish()
				: projectOpt.get().getTitleEnglish());
		project.setDescription(projectInsert.getDescription() != null ? projectInsert.getDescription()
				: projectOpt.get().getDescription());
		project.setDescriptionEnglish(
				projectInsert.getDescriptionEnglish() != null ? projectInsert.getDescriptionEnglish()
						: projectOpt.get().getDescriptionEnglish());
		project.setTechnologies(projectInsert.getTechnologies() != null ? projectInsert.getTechnologies()
				: projectOpt.get().getTechnologies());
		project.setLink(projectInsert.getLink() != null ? projectInsert.getLink() : projectOpt.get().getLink());
		project.setGithubLink(projectInsert.getGithubLink() != null ? projectInsert.getGithubLink()
				: projectOpt.get().getGithubLink());
		projectRepository.save(project);
		ProjectDTO projectDto = addPhotoUri(project);
		return projectDto;
	}

	public String delete(Long id) {
		Optional<Project> projectOpt = projectRepository.findById(id);
		if (projectOpt.isEmpty()) {
			throw new NotFoundException("Projeto não encontrado");
		}
		projectRepository.deleteById(id);
		return "Projeto deletado com sucesso!";

	}

	public ProjectDTO addPhotoUri(Project project) {

		URI uri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/projects/photo/{id}")
				.buildAndExpand(project.getId()).toUri();

		ProjectDTO projectDto = new ProjectDTO();

		projectDto.setId(project.getId());
		projectDto.setTitle(project.getTitle());
		projectDto.setTitleEnglish(project.getTitleEnglish());
		projectDto.setDescription(project.getDescription());
		projectDto.setDescriptionEnglish(project.getDescriptionEnglish());
		projectDto.setTechnologies(project.getTechnologies());
		projectDto.setLink(project.getLink());
		projectDto.setGithubLink(project.getGithubLink());
		projectDto.setImage(uri.toString());
		project.setImage(uri.toString());
		projectRepository.save(project);
		return projectDto;
	}
}
