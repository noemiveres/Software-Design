package com.utcn.demo.controller;

import com.utcn.demo.entity.Answer;
import com.utcn.demo.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/answers")
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @GetMapping
    public List<Answer> retrieveAllAnswers() {
        return answerService.retrieveAnswers();
    }

    @GetMapping("/toQuestion/{id}")
    public  List<Answer> retrieveAllAnswersToQuestionId(@PathVariable Long id){
        return answerService.getAnswersByQuestionId(id);
    }

    @GetMapping("/{id}")
    public Optional<Answer> getAnswerById(@PathVariable Long id) {
        return answerService.retrieveAnswerById(id);
    }

    @GetMapping("/ofUser/{id}")
    public List<Answer> getAnswersByUserId(@PathVariable Long id){
        return answerService.getAnswersByUserId(id);
    }

    @PostMapping
    public void createAnswer(@RequestBody Answer answer) {
        answerService.saveAnswer(answer);
    }

    @PutMapping("/{id}")
    public void updateAnswerById(@PathVariable Long id, @RequestBody Answer answer) {
        answer.setId(id);
        answerService.saveAnswer(answer);
    }

    @DeleteMapping("/{id}")
    public void deleteAnswerById(@PathVariable Long id) {
        answerService.deleteAnswerById(id);
    }
}

