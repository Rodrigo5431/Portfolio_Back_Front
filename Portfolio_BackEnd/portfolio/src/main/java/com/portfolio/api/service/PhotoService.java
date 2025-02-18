package com.portfolio.api.service;

import java.io.IOException;
import java.net.URI;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.portfolio.api.dto.ProjectDTO;
import com.portfolio.api.entity.Photo;
import com.portfolio.api.entity.Project;
import com.portfolio.api.repository.PhotoRepository;
import com.portfolio.api.repository.ProjectRepository;

import jakarta.transaction.Transactional;

@Service
public class PhotoService {

	@Autowired
	PhotoRepository photoRepository;
	@Autowired
	ProjectRepository projectRepository;

	public Photo inserir(Project project, MultipartFile file) throws IOException {


        Photo photo = new Photo();
        photo.setNames(file.getName());
        photo.setTypes(file.getContentType());
        photo.setDatas(file.getBytes());
        photo.setProject(project);
		return photoRepository.save(photo);
	}

	@Transactional
	public Photo searchByProject(Long id) {
		Project project = new Project();
		project.setId(id);
		Optional<Photo> photo = photoRepository.findByProject(project);

		if (photo.isEmpty()) {
			System.out.println("não tem foto");
		}
		return photo.get();
	}
}
