package com.portfolio.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.api.entity.Photo;
import com.portfolio.api.entity.Project;

@Repository
public interface PhotoRepository extends JpaRepository<Photo, Long> {
	public Optional<Photo> findByProject(Project project); 
	
}
