package com.utcn.demo.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@PrimaryKeyJoinColumn(name = "content_id")
@Table(name = "answers")
public class Answer extends Content {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private Question question;

    public Answer() {
        super();
    }

    public Answer(Long id, User author, String text, LocalDateTime creationDate, String picture, Question question) {
        super(id, author, text, creationDate, picture);
        this.question = question;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }
}
