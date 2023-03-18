package com.utcn.demo.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@PrimaryKeyJoinColumn(name = "content_id")
@Table(name = "answers")
public class Answer extends Content {

//    @Column(name = "question_id")
//    private Long questionId;

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

    //    public Answer(Long id, User author, String text, LocalDateTime creationDate, String picture, Long questionId, Question question) {
//        super(id, author, text, creationDate, picture);
//        this.questionId = questionId;
//        this.question = question;
//    }
//
//    public Long getQuestionId() {
//        return questionId;
//    }
//
//    public void setQuestionId(Long questionId) {
//        this.questionId = questionId;
//    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }
}
