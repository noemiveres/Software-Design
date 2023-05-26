package com.utcn.demo.repository;

import com.utcn.demo.entity.Question;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends CrudRepository<Question, Long> {
    List<Question> findAllByAuthorUserId(Long userId);

    List<Question> findAllByTagsName(String tagName);

    List<Question> findAllByTitleContainingIgnoreCase(String searchTerm);

    List<Question> findAllByAuthor_FirstNameContainingIgnoreCaseAndAuthor_LastNameContainingIgnoreCase
            (String firstName, String lastName);

}
