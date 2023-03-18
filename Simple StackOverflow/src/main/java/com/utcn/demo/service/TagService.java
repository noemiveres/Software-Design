//package com.utcn.demo.service;
//
//import com.utcn.demo.entity.Tag;
//import com.utcn.demo.repository.TagRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class TagService {
//    @Autowired
//    private TagRepository tagRepository;
//
//    public List<Tag> retrieveAllTags() {
//        return (List<Tag>) tagRepository.findAll();
//    }
//
//    public Optional<Tag> retrieveTagById(Long id) {
//        return tagRepository.findById(id);
//    }
//
//    public Tag createTag(Tag tag) {
//        return tagRepository.save(tag);
//    }
//
//    public void saveTag(Tag tag) { tagRepository.save(tag);    }
//
//    public void deleteTagById(Long id) {
//        tagRepository.deleteById(id);
//    }
//}
