package com.portfolio.controller;

import com.portfolio.model.Skill;
import com.portfolio.service.SkillService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/skills")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173", "https://portfolio-frontend.onrender.com"})
public class SkillController {

    private final SkillService skillService;

    @Autowired
    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }

    /**
     * Get all skills
     */
    @GetMapping
    public ResponseEntity<List<Skill>> getAllSkills(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) Integer minProficiency,
            @RequestParam(required = false) String search) {
        
        List<Skill> skills;
        
        if (search != null && !search.trim().isEmpty()) {
            skills = skillService.searchSkillsByName(search.trim());
        } else if (category != null) {
            skills = skillService.getSkillsByCategory(category);
        } else if (minProficiency != null) {
            skills = skillService.getSkillsByMinimumProficiency(minProficiency);
        } else {
            skills = skillService.getAllSkills();
        }
        
        return ResponseEntity.ok(skills);
    }

    /**
     * Get skill by ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<Skill> getSkillById(@PathVariable Long id) {
        Optional<Skill> skill = skillService.getSkillById(id);
        return skill.map(ResponseEntity::ok)
                   .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Get skills grouped by category
     */
    @GetMapping("/grouped")
    public ResponseEntity<Map<String, List<Skill>>> getSkillsGroupedByCategory() {
        Map<String, List<Skill>> groupedSkills = skillService.getSkillsGroupedByCategory();
        return ResponseEntity.ok(groupedSkills);
    }

    /**
     * Get all categories
     */
    @GetMapping("/categories")
    public ResponseEntity<List<String>> getAllCategories() {
        List<String> categories = skillService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    /**
     * Get skills by category
     */
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Skill>> getSkillsByCategory(@PathVariable String category) {
        List<Skill> skills = skillService.getSkillsByCategory(category);
        return ResponseEntity.ok(skills);
    }

    /**
     * Get top skills by proficiency level
     */
    @GetMapping("/top")
    public ResponseEntity<List<Skill>> getTopSkills(
            @RequestParam(defaultValue = "5") Integer proficiencyLevel) {
        List<Skill> skills = skillService.getTopSkillsByProficiency(proficiencyLevel);
        return ResponseEntity.ok(skills);
    }

    /**
     * Get skills by experience range
     */
    @GetMapping("/experience")
    public ResponseEntity<List<Skill>> getSkillsByExperience(
            @RequestParam Integer minYears,
            @RequestParam Integer maxYears) {
        List<Skill> skills = skillService.getSkillsByExperienceRange(minYears, maxYears);
        return ResponseEntity.ok(skills);
    }

    /**
     * Create new skill
     */
    @PostMapping
    public ResponseEntity<Skill> createSkill(@Valid @RequestBody Skill skill) {
        try {
            // Check if skill already exists
            if (skillService.existsByNameAndCategory(skill.getName(), skill.getCategory())) {
                return ResponseEntity.status(HttpStatus.CONFLICT).build();
            }
            
            Skill createdSkill = skillService.createSkill(skill);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdSkill);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * Update existing skill
     */
    @PutMapping("/{id}")
    public ResponseEntity<Skill> updateSkill(@PathVariable Long id, 
                                           @Valid @RequestBody Skill skill) {
        Optional<Skill> updatedSkill = skillService.updateSkill(id, skill);
        return updatedSkill.map(ResponseEntity::ok)
                         .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Delete skill
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSkill(@PathVariable Long id) {
        boolean deleted = skillService.deleteSkill(id);
        return deleted ? ResponseEntity.noContent().build() 
                      : ResponseEntity.notFound().build();
    }

    /**
     * Get category statistics
     */
    @GetMapping("/stats")
    public ResponseEntity<Map<String, SkillService.CategoryStats>> getCategoryStatistics() {
        Map<String, SkillService.CategoryStats> stats = skillService.getCategoryStatistics();
        return ResponseEntity.ok(stats);
    }

    /**
     * Check if skill exists by name and category
     */
    @GetMapping("/exists")
    public ResponseEntity<Boolean> checkSkillExists(@RequestParam String name, 
                                                   @RequestParam String category) {
        boolean exists = skillService.existsByNameAndCategory(name, category);
        return ResponseEntity.ok(exists);
    }

    /**
     * Get skill count by category
     */
    @GetMapping("/category/{category}/count")
    public ResponseEntity<Long> getSkillCountByCategory(@PathVariable String category) {
        long count = skillService.getSkillCountByCategory(category);
        return ResponseEntity.ok(count);
    }

    /**
     * Get average proficiency by category
     */
    @GetMapping("/category/{category}/average-proficiency")
    public ResponseEntity<Double> getAverageProficiencyByCategory(@PathVariable String category) {
        Double average = skillService.getAverageProficiencyByCategory(category);
        return ResponseEntity.ok(average != null ? average : 0.0);
    }
}