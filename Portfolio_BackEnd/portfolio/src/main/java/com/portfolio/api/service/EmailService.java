package com.portfolio.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.portfolio.api.dto.SendEmailDTO;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;
    
    @Value("${spring.mail.username}")
    private String from;
    
    @Value("rodrigocarvalholima2005@gmail.com")
    private String to;

    public String sendEmail(SendEmailDTO mailDto) {
        try {
        	String mensagem = String.format(
        		    "📩 Novo Contato via Formulário 📩\n\n" +
        		    "👤 De: %s\n" +
        		    "✉️ Email: %s\n\n" +
        		    "📌 Assunto: %s\n\n" +
        		    "📝 Mensagem:\n%s\n\n",
        		    mailDto.getName(),
        		    mailDto.getEmail(),
        		    mailDto.getSubject(),
        		    mailDto.getMessage()
        		);


            SimpleMailMessage email = new SimpleMailMessage();
            email.setFrom(from);
            email.setTo(to);
            email.setSubject("📬 Novo Contato: " + mailDto.getSubject());
            email.setText(mensagem);
  
            javaMailSender.send(email);
            return "Email enviado com sucesso!";
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
