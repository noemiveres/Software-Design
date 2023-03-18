package com.utcn.demo.controller;

import com.utcn.demo.entity.Content;
import com.utcn.demo.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/contents")
public class ContentController {
    @Autowired
    private ContentService contentService;

    @GetMapping
    public List<Content> retrieveAllContents(){ return contentService.retrieveContents();}
}
