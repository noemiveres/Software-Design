package com.utcn.demo.service;

import com.utcn.demo.entity.Question;
import com.utcn.demo.entity.Tag;
import com.utcn.demo.repository.QuestionRepository;
import com.utcn.demo.repository.TagRepository;
import com.utcn.demo.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    TagRepository tagRepository;

    @Autowired
    VoteRepository voteRepository;

    public List<Question> retrieveQuestions() {
        return (List<Question>) questionRepository.findAll();
    }

    public Optional<Question> retrieveQuestionById(Long id) {
        return questionRepository.findById(id);
    }

    public void saveQuestion(Question question) {
        List<String> tagNames = question.getTagNames();
        List<Tag> tags = new ArrayList<>();
        for(String tagName : tagNames){
            Tag tag = tagRepository.findByName(tagName);
            if(tag==null){
                tag = new Tag(tagName);
                tagRepository.save(tag);
            }
            tags.add(tag);
        }
        question.setTags(tags);
        questionRepository.save(question);
    }

    public void deleteQuestionById(Long id) {
        Optional<Question> question = questionRepository.findById(id);
        question.get().setTags(new ArrayList<>());  // to avoid deleting tags being referenced by other questions
        questionRepository.deleteById(id);
    }

    public List<Question> getQuestionsByUserId(Long id) {
        return questionRepository.findAllByAuthorUserId(id);
    }

    public List<Question> getQuestionsByTagName(String tagName) {
        return questionRepository.findAllByTagsName(tagName);
    }

    public List<Question> getQuestionsByTitle(String searchTerm) {
        return questionRepository.findAllByTitleContainingIgnoreCase(searchTerm);
    }

    public List<Question> getQuestionsByAuthor(String firstName, String lastName) {
        return questionRepository.findAllByAuthor_FirstNameContainingIgnoreCaseAndAuthor_LastNameContainingIgnoreCase(firstName, lastName);
    }

}
