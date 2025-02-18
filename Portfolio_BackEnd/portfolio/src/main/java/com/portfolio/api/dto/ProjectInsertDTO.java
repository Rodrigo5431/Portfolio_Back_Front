package com.portfolio.api.dto;

import java.util.List;

public class ProjectInsertDTO {

	private String title;
	private String titleEnglish;
	private String description;
	private String descriptionEnglish;
	private List<String> technologies;
	private String link;
	private String githubLink;
	private String image;

	public ProjectInsertDTO(String title, String titleEnglish, String description, String descriptionEnglish,
			List<String> technologies, String link, String githubLink, String image) {
		super();
		this.title = title;
		this.titleEnglish = titleEnglish;
		this.description = description;
		this.descriptionEnglish = descriptionEnglish;
		this.technologies = technologies;
		this.link = link;
		this.githubLink = githubLink;
		this.image = image;
	}

	public ProjectInsertDTO() {
		super();
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<String> getTechnologies() {
		return technologies;
	}

	public void setTechnologies(List<String> technologies) {
		this.technologies = technologies;
	}

	public String getTitleEnglish() {
		return titleEnglish;
	}

	public void setTitleEnglish(String titleEnglish) {
		this.titleEnglish = titleEnglish;
	}

	public String getDescriptionEnglish() {
		return descriptionEnglish;
	}

	public void setDescriptionEnglish(String descriptionEnglish) {
		this.descriptionEnglish = descriptionEnglish;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getGithubLink() {
		return githubLink;
	}

	public void setGithubLink(String githubLink) {
		this.githubLink = githubLink;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

}
