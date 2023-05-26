package com.utcn.demo.repository;

import com.utcn.demo.entity.Answer;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface AnswerRepository extends CrudRepository<Answer,Long> {
    List<Answer> findAllByQuestionId(Long questionId);

    List<Answer> findAllByAuthorUserId(Long userId);
}
