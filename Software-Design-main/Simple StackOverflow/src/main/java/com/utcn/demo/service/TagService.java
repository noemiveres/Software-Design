package com.utcn.demo.service;

import com.utcn.demo.entity.Tag;
import com.utcn.demo.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TagService {
    @Autowired
    private TagRepository tagRepository;

    public List<Tag> retrieveAllTags() {
        return (List<Tag>) tagRepository.findAll();
    }

    public List<String> retrieveAllTagsNames() {
        List<Tag> tags = (List<Tag>) tagRepository.findAll();
        List<String> tagNames = new ArrayList<>();
        for(Tag tag : tags) {
            tagNames.add(tag.getName());
        }
        return tagNames;
    }

    public Optional<Tag> retrieveTagById(Long id) {
        return tagRepository.findById(id);
    }

    public void deleteTagById(Long id) {
        tagRepository.deleteById(id);
    }

    public void deleteTagByName(String name){
        Tag tag = tagRepository.findByName(name);
        if (tag != null){
            tagRepository.deleteById(tag.getId());
        }
    }

    public Tag saveTag(String name){
        Tag tag = tagRepository.findByName(name);
        if(tag == null){
            Tag newTag = new Tag(name);
            tagRepository.save(newTag);
            return newTag;
        }
        return tag;
    }

    public Tag retrieveTagByName(String name) {
        return tagRepository.findByName(name);
    }
}
