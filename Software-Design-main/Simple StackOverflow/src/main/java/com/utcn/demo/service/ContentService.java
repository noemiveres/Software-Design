package com.utcn.demo.service;

import com.utcn.demo.entity.Content;
import com.utcn.demo.entity.User;
import com.utcn.demo.repository.ContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContentService {
    @Autowired
    private ContentRepository contentRepository;

    public List<Content> retrieveContents() {
        return (List<Content>) contentRepository.findAll();
    }

    public Content retrieveContentById(Long contentId){
        Optional<Content> content = contentRepository.findById(contentId);

        if(content.isPresent()){
            return content.get();
        } else{
            return null;
        }
    }

    public void saveContent(Content content) {
        contentRepository.save(content);
    }

    public void deleteContentById(Long contentId){
        contentRepository.deleteById(contentId);
    }
}
