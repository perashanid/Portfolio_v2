package com.portfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    
    @Autowired
    private JavaMailSender mailSender;
    
    @Value("${portfolio.email.to:admin@portfolio.com}")
    private String adminEmail;
    
    @Value("${portfolio.email.from:noreply@portfolio.com}")
    private String fromEmail;
    
    @Value("${spring.mail.username:}")
    private String mailUsername;
    
    /**
     * Check if email service is configured
     */
    public boolean isEmailConfigured() {
        return mailUsername != null && !mailUsername.trim().isEmpty();
    }
    
    /**
     * Send contact form notification to admin
     */
    public void sendContactFormNotification(String name, String email, String subject, String message, String recipientEmail) {
        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo(recipientEmail != null ? recipientEmail : adminEmail);
            mailMessage.setFrom(fromEmail);
            mailMessage.setSubject("Portfolio Contact: " + subject);
            mailMessage.setText(
                "New contact form submission:\n\n" +
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Subject: " + subject + "\n\n" +
                "Message:\n" + message
            );
            
            mailSender.send(mailMessage);
        } catch (Exception e) {
            // Log error but don't throw exception to avoid breaking the contact form
            System.err.println("Failed to send contact form notification: " + e.getMessage());
        }
    }
    
    /**
     * Send auto-reply to contact form sender
     */
    public void sendContactFormAutoReply(String recipientEmail, String name) {
        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo(recipientEmail);
            mailMessage.setFrom(fromEmail);
            mailMessage.setSubject("Thank you for contacting me!");
            mailMessage.setText(
                "Hi " + name + ",\n\n" +
                "Thank you for reaching out through my portfolio contact form. " +
                "I have received your message and will get back to you as soon as possible.\n\n" +
                "Best regards,\n" +
                "Shanid Sajjatuz Islam"
            );
            
            mailSender.send(mailMessage);
        } catch (Exception e) {
            // Log error but don't throw exception
            System.err.println("Failed to send auto-reply email: " + e.getMessage());
        }
    }
    
    /**
     * Legacy method for backward compatibility
     */
    public void sendContactEmail(String name, String email, String subject, String message) {
        sendContactFormNotification(name, email, subject, message, adminEmail);
    }
}