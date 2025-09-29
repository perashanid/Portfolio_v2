package com.portfolio.controller;

import com.portfolio.model.Project;
import com.portfolio.service.ProjectService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173", "https://portfolio-frontend.onrender.com"})
public class ProjectController {

    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    /**
     * Get all projects
     */
    @GetMapping
    public ResponseEntity<List<Project>> getAllProjects(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String technology,
            @RequestParam(required = false) Boolean featured) {
        
        List<Project> projects;
        
        if (category != null && featured != null) {
            projects = projectService.getProjectsByCategoryAndFeatured(category, featured);
        } else if (category != null) {
            projects = projectService.getProjectsByCategory(category);
        } else if (technology != null) {
            projects = projectService.getProjectsByTechnology(technology);
        } else if (featured != null && featured) {
            projects = projectService.getFeaturedProjects();
        } else {
            projects = projectService.getAllProjects();
        }
        
        return ResponseEntity.ok(projects);
    }

    /**
     * Get project by ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable Long id) {
        Optional<Project> project = projectService.getProjectById(id);
        return project.map(ResponseEntity::ok)
                     .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Get featured projects
     */
    @GetMapping("/featured")
    public ResponseEntity<List<Project>> getFeaturedProjects() {
        List<Project> projects = projectService.getFeaturedProjects();
        return ResponseEntity.ok(projects);
    }

    /**
     * Get all categories
     */
    @GetMapping("/categories")
    public ResponseEntity<List<String>> getAllCategories() {
        List<String> categories = projectService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    /**
     * Get all technologies
     */
    @GetMapping("/technologies")
    public ResponseEntity<List<String>> getAllTechnologies() {
        List<String> technologies = projectService.getAllTechnologies();
        return ResponseEntity.ok(technologies);
    }

    /**
     * Create new project
     */
    @PostMapping
    public ResponseEntity<Project> createProject(@Valid @RequestBody Project project) {
        try {
            Project createdProject = projectService.createProject(project);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdProject);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * Update existing project
     */
    @PutMapping("/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable Long id, 
                                               @Valid @RequestBody Project project) {
        Optional<Project> updatedProject = projectService.updateProject(id, project);
        return updatedProject.map(ResponseEntity::ok)
                           .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Toggle featured status
     */
    @PatchMapping("/{id}/featured")
    public ResponseEntity<Project> toggleFeaturedStatus(@PathVariable Long id) {
        Optional<Project> updatedProject = projectService.toggleFeaturedStatus(id);
        return updatedProject.map(ResponseEntity::ok)
                           .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Delete project
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
        boolean deleted = projectService.deleteProject(id);
        return deleted ? ResponseEntity.noContent().build() 
                      : ResponseEntity.notFound().build();
    }

    /**
     * Get project statistics
     */
    @GetMapping("/stats")
    public ResponseEntity<ProjectStats> getProjectStats() {
        long totalProjects = projectService.getAllProjects().size();
        long featuredProjects = projectService.getFeaturedProjectCount();
        List<String> categories = projectService.getAllCategories();
        List<String> technologies = projectService.getAllTechnologies();
        
        ProjectStats stats = new ProjectStats(totalProjects, featuredProjects, 
                                            categories.size(), technologies.size());
        return ResponseEntity.ok(stats);
    }

    /**
     * Inner class for project statistics
     */
    public static class ProjectStats {
        private final long totalProjects;
        private final long featuredProjects;
        private final int totalCategories;
        private final int totalTechnologies;

        public ProjectStats(long totalProjects, long featuredProjects, 
                          int totalCategories, int totalTechnologies) {
            this.totalProjects = totalProjects;
            this.featuredProjects = featuredProjects;
            this.totalCategories = totalCategories;
            this.totalTechnologies = totalTechnologies;
        }

        public long getTotalProjects() {
            return totalProjects;
        }

        public long getFeaturedProjects() {
            return featuredProjects;
        }

        public int getTotalCategories() {
            return totalCategories;
        }

        public int getTotalTechnologies() {
            return totalTechnologies;
        }
    }
}