package com.portfolio.controller;

import com.portfolio.model.PersonalInfo;
import com.portfolio.service.PersonalInfoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/personal-info")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173", "https://portfolio-frontend.onrender.com"})
public class PersonalInfoController {

    private final PersonalInfoService personalInfoService;

    @Autowired
    public PersonalInfoController(PersonalInfoService personalInfoService) {
        this.personalInfoService = personalInfoService;
    }

    /**
     * Get personal information
     */
    @GetMapping
    public ResponseEntity<PersonalInfo> getPersonalInfo() {
        Optional<PersonalInfo> personalInfo = personalInfoService.getPersonalInfo();
        return personalInfo.map(ResponseEntity::ok)
                          .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Get personal information by ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<PersonalInfo> getPersonalInfoById(@PathVariable Long id) {
        Optional<PersonalInfo> personalInfo = personalInfoService.getPersonalInfoById(id);
        return personalInfo.map(ResponseEntity::ok)
                          .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Create or update personal information
     */
    @PutMapping
    public ResponseEntity<PersonalInfo> savePersonalInfo(@Valid @RequestBody PersonalInfo personalInfo) {
        try {
            PersonalInfo savedInfo = personalInfoService.savePersonalInfo(personalInfo);
            return ResponseEntity.ok(savedInfo);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * Update personal information by ID
     */
    @PutMapping("/{id}")
    public ResponseEntity<PersonalInfo> updatePersonalInfo(@PathVariable Long id, 
                                                          @Valid @RequestBody PersonalInfo personalInfo) {
        Optional<PersonalInfo> updatedInfo = personalInfoService.updatePersonalInfo(id, personalInfo);
        return updatedInfo.map(ResponseEntity::ok)
                         .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Check if email exists
     */
    @GetMapping("/check-email")
    public ResponseEntity<Boolean> checkEmailExists(@RequestParam String email) {
        boolean exists = personalInfoService.existsByEmail(email);
        return ResponseEntity.ok(exists);
    }

    /**
     * Delete personal information by ID
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePersonalInfo(@PathVariable Long id) {
        boolean deleted = personalInfoService.deletePersonalInfo(id);
        return deleted ? ResponseEntity.noContent().build() 
                      : ResponseEntity.notFound().build();
    }
}