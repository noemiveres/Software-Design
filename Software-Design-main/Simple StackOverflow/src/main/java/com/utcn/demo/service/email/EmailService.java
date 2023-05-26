package com.utcn.demo.service.email;

import com.utcn.demo.entity.EmailDetails;

public interface EmailService {
    String sendSimpleEmail(EmailDetails emailDetails);

}
