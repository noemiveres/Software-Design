package com.utcn.demo.controller;

import com.utcn.demo.entity.Question;
import com.utcn.demo.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping
    public List<Question> retrieveQuestions() {
        return questionService.retrieveQuestions();
    }

    @GetMapping("/{id}")
    public Optional<Question> getQuestionById(@PathVariable Long id) {
        return questionService.retrieveQuestionById(id);
    }

    @GetMapping("/ofUser/{id}")
    public List<Question> getQuestionsByUserId(@PathVariable Long id){
        return questionService.getQuestionsByUserId(id);
    }

    @GetMapping("/ofTag/{tagName}")
    public List<Question> getQuestionsByTagName(@PathVariable String tagName){
        return questionService.getQuestionsByTagName(tagName);
    }

    @GetMapping("/search/{searchTerm}")
    public List<Question> getQuestionsBySearchTerm(@PathVariable String searchTerm) {
        return questionService.getQuestionsByTitle(searchTerm);
    }

    @GetMapping("/search/{firstName}/{lastName}")
    public List<Question> getQuestionsByUser(@PathVariable String firstName, @PathVariable String lastName) {
        return questionService.getQuestionsByAuthor(firstName, lastName);
    }

    @PostMapping
    public void createQuestion(@RequestBody Question question) {
        questionService.saveQuestion(question);
    }

    @PutMapping("/{id}")
    public void updateQuestionById(@PathVariable Long id, @RequestBody Question question) {
        question.setId(id);
        questionService.saveQuestion(question);
    }

    @DeleteMapping("/{id}")
    public void deleteQuestionById(@PathVariable Long id) {
        questionService.deleteQuestionById(id);
    }
}
