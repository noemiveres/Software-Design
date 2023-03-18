package com.utcn.demo.service;

import com.utcn.demo.entity.Answer;
import com.utcn.demo.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    @Autowired
    private AnswerRepository answerRepository;

    public List<Answer> retrieveAnswers() {
        return (List<Answer>) answerRepository.findAll();
    }

    public List<Answer> getAnswersByQuestionId(Long questionId) {
        return answerRepository.findAllByQuestionId(questionId);
    }

    public Optional<Answer> retrieveAnswerById(Long id) {
        return answerRepository.findById(id);
    }

    public void saveAnswer(Answer answer) {
        answerRepository.save(answer);
    }

    public void deleteAnswerById(Long id) {
        answerRepository.deleteById(id);
    }
}
