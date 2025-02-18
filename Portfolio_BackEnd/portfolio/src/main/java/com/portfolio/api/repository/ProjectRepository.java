package com.portfolio.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.api.entity.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

}
