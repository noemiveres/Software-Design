package com.utcn.demo.service;

import com.utcn.demo.entity.Question;
import com.utcn.demo.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    public List<Question> retrieveQuestions() {
        return (List<Question>) questionRepository.findAll();
    }

    public Optional<Question> retrieveQuestionById(Long id) {
        return questionRepository.findById(id);
    }

    public void saveQuestion(Question question) {
        questionRepository.save(question);
    }

    public void deleteQuestionById(Long id) {
        questionRepository.deleteById(id);
    }
}
