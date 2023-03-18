package com.utcn.demo.service;

import com.utcn.demo.entity.Content;
import com.utcn.demo.repository.ContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContentService {
    @Autowired
    private ContentRepository contentRepository;

    public List<Content> retrieveContents() {
        return (List<Content>) contentRepository.findAll();
    }
}
