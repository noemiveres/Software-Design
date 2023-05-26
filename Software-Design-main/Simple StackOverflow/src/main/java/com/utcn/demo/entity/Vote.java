package com.utcn.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "vote")
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vote_id")
    private Long voteId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "content_id")
    private Content content;

    @Column(name = "vote_type")
    @Enumerated(EnumType.STRING)
    private EVoteType voteType;

    public Vote() {

    }

    public Vote(Long voteId, User user, Content content, EVoteType voteType) {
    	//this.voteId = voteId;
    	this.user = user;
    	this.content = content;
    	this.voteType = voteType;
    }

    public Long getVoteId() {
        return voteId;
    }

    public void setVoteId(Long voteId) {
        this.voteId = voteId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Content getContent() {
        return content;
    }

    public void setContent(Content content) {
        this.content = content;
    }

    public EVoteType getVoteType() {
        return voteType;
    }

    public void setVoteType(EVoteType voteType) {
        this.voteType = voteType;
    }
}
