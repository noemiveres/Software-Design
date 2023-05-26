package com.utcn.demo.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "content")
@Inheritance(strategy = InheritanceType.JOINED)
public class Content {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "author_id")
    private User author;

    @Column(name = "text")
    private String text;

    @Column(name = "picture")
    private String picture;

    @Column(name = "created_at")
    private LocalDateTime creationDate;

    @OneToMany(mappedBy = "content", cascade = CascadeType.ALL)
    private List<Vote> votes;

    public Content(){

    }

    public Content(Long id, User author, String text, LocalDateTime creationDate, String picture) {
        this.id = id;
        this.author = author;
        this.text = text;
        this.creationDate = creationDate;
        this.picture = picture;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
}
