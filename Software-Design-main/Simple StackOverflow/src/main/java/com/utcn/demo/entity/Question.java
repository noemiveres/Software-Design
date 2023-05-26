package com.utcn.demo.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@PrimaryKeyJoinColumn(name = "content_id")
@Table(name = "questions")
public class Question extends Content {

    @Column(name = "title")
    private String title;

    @ManyToMany(targetEntity = Tag.class, cascade = CascadeType.ALL)
    @JoinTable(name = "question_tags",
            joinColumns = @JoinColumn(name = "question_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id"))
    private List<Tag> tags;

    @OneToMany(mappedBy = "question")
    private List<Answer> answers;

    public Question() {}

    public Question(Long id, User author, String text, LocalDateTime creationDate, String picture, String title, List<Tag> tags) {
        super(id, author, text, creationDate, picture);
        this.title = title;
        this.tags = tags;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }

    public void addTag(Tag tag){
        tags.add(tag);
    }

    public List<String> getTagNames(){
        List<String> tagNames = new ArrayList<>();
        for(Tag tag : tags){
            tagNames.add(tag.getName());
        }
        return tagNames;
    }
}
