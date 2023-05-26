package com.utcn.demo.controller;

import com.utcn.demo.entity.EmailDetails;
import com.utcn.demo.service.email.EmailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {
    @Autowired
    private EmailServiceImpl emailServiceImpl;

    // Sending a simple Email
    @PostMapping("/sendMail")
    public String
    sendMail(@RequestBody EmailDetails details)
    {
        String status = emailServiceImpl.sendSimpleEmail(details);

        return status;
    }

//    {
//        "recipient": "email@gmail.com",
//            "msgBody": "Hello, dear!",
//            "subject": "testing"
//    }
}
