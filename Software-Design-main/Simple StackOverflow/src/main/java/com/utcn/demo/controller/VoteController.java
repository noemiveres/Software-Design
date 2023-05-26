package com.utcn.demo.controller;

import com.utcn.demo.entity.EVoteType;
import com.utcn.demo.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/votes")
public class VoteController {
    @Autowired
    private VoteService voteService;

    @PutMapping("/upvote/{userId}/{contentId}")
    public void upvote(@PathVariable Long userId, @PathVariable Long contentId){
        voteService.newVote(userId, contentId, EVoteType.UPVOTE);
    }

    @PutMapping("/downvote/{userId}/{contentId}")
    public void downvote(@PathVariable Long userId, @PathVariable Long contentId){
        voteService.newVote(userId, contentId, EVoteType.DOWNVOTE);
    }

    @GetMapping("/content/{id}")
    public int getVoteCount(@PathVariable Long id){
        return voteService.getVoteCount(id);
    }

    @GetMapping("/score/user/{id}")
    public double getScoreByUserId(@PathVariable Long id){
        return voteService.getUserScore(id);
    }
}