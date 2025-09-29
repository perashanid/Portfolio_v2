package com.portfolio.controller;

import com.portfolio.model.ContactMessage;
import com.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173", "https://portfolio-frontend.onrender.com"})
public class ContactController {

    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    /**
     * Submit contact form
     */
    @PostMapping
    public ResponseEntity<ContactFormResponse> submitContactForm(@Valid @RequestBody ContactMessage contactMessage) {
        try {
            ContactMessage savedMessage = contactService.submitContactForm(contactMessage);
            ContactFormResponse response = new ContactFormResponse(
                "Message sent successfully! Thank you for reaching out.",
                savedMessage.getId(),
                true
            );
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (RuntimeException e) {
            ContactFormResponse response = new ContactFormResponse(
                e.getMessage(),
                null,
                false
            );
            return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS).body(response);
        } catch (Exception e) {
            ContactFormResponse response = new ContactFormResponse(
                "Failed to send message. Please try again later.",
                null,
                false
            );
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * Get all contact messages (admin endpoint)
     */
    @GetMapping("/messages")
    public ResponseEntity<List<ContactMessage>> getAllMessages(
            @RequestParam(required = false) Boolean unreadOnly,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime after) {
        
        List<ContactMessage> messages;
        
        if (search != null && !search.trim().isEmpty()) {
            messages = contactService.searchMessages(search.trim());
        } else if (email != null) {
            messages = contactService.getMessagesByEmail(email);
        } else if (after != null) {
            messages = contactService.getMessagesAfterDate(after);
        } else if (unreadOnly != null && unreadOnly) {
            messages = contactService.getUnreadMessages();
        } else {
            messages = contactService.getAllMessages();
        }
        
        return ResponseEntity.ok(messages);
    }

    /**
     * Get contact message by ID (admin endpoint)
     */
    @GetMapping("/messages/{id}")
    public ResponseEntity<ContactMessage> getMessageById(@PathVariable Long id) {
        Optional<ContactMessage> message = contactService.getMessageById(id);
        return message.map(ResponseEntity::ok)
                     .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Get unread messages (admin endpoint)
     */
    @GetMapping("/messages/unread")
    public ResponseEntity<List<ContactMessage>> getUnreadMessages() {
        List<ContactMessage> messages = contactService.getUnreadMessages();
        return ResponseEntity.ok(messages);
    }

    /**
     * Get messages between dates (admin endpoint)
     */
    @GetMapping("/messages/between")
    public ResponseEntity<List<ContactMessage>> getMessagesBetweenDates(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime endDate) {
        List<ContactMessage> messages = contactService.getMessagesBetweenDates(startDate, endDate);
        return ResponseEntity.ok(messages);
    }

    /**
     * Mark message as read (admin endpoint)
     */
    @PatchMapping("/messages/{id}/read")
    public ResponseEntity<Void> markAsRead(@PathVariable Long id) {
        boolean updated = contactService.markAsRead(id);
        return updated ? ResponseEntity.ok().build() 
                      : ResponseEntity.notFound().build();
    }

    /**
     * Mark message as unread (admin endpoint)
     */
    @PatchMapping("/messages/{id}/unread")
    public ResponseEntity<Void> markAsUnread(@PathVariable Long id) {
        boolean updated = contactService.markAsUnread(id);
        return updated ? ResponseEntity.ok().build() 
                      : ResponseEntity.notFound().build();
    }

    /**
     * Mark all messages as read (admin endpoint)
     */
    @PatchMapping("/messages/read-all")
    public ResponseEntity<Void> markAllAsRead() {
        contactService.markAllAsRead();
        return ResponseEntity.ok().build();
    }

    /**
     * Delete message (admin endpoint)
     */
    @DeleteMapping("/messages/{id}")
    public ResponseEntity<Void> deleteMessage(@PathVariable Long id) {
        boolean deleted = contactService.deleteMessage(id);
        return deleted ? ResponseEntity.noContent().build() 
                      : ResponseEntity.notFound().build();
    }

    /**
     * Get contact statistics (admin endpoint)
     */
    @GetMapping("/stats")
    public ResponseEntity<ContactStats> getContactStats() {
        long totalMessages = contactService.getAllMessages().size();
        long unreadMessages = contactService.getUnreadMessageCount();
        
        ContactStats stats = new ContactStats(totalMessages, unreadMessages);
        return ResponseEntity.ok(stats);
    }

    /**
     * Clean up old messages (admin endpoint)
     */
    @DeleteMapping("/cleanup")
    public ResponseEntity<Void> cleanupOldMessages(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime olderThan) {
        contactService.deleteMessagesOlderThan(olderThan);
        return ResponseEntity.ok().build();
    }

    /**
     * Response class for contact form submission
     */
    public static class ContactFormResponse {
        private final String message;
        private final Long messageId;
        private final boolean success;

        public ContactFormResponse(String message, Long messageId, boolean success) {
            this.message = message;
            this.messageId = messageId;
            this.success = success;
        }

        public String getMessage() {
            return message;
        }

        public Long getMessageId() {
            return messageId;
        }

        public boolean isSuccess() {
            return success;
        }
    }

    /**
     * Statistics class for contact messages
     */
    public static class ContactStats {
        private final long totalMessages;
        private final long unreadMessages;

        public ContactStats(long totalMessages, long unreadMessages) {
            this.totalMessages = totalMessages;
            this.unreadMessages = unreadMessages;
        }

        public long getTotalMessages() {
            return totalMessages;
        }

        public long getUnreadMessages() {
            return unreadMessages;
        }
    }
}