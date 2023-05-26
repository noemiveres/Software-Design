package com.utcn.demo.service;

import com.utcn.demo.entity.Content;
import com.utcn.demo.entity.EVoteType;
import com.utcn.demo.entity.User;
import com.utcn.demo.entity.Vote;
import com.utcn.demo.repository.ContentRepository;
import com.utcn.demo.repository.UserRepository;
import com.utcn.demo.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VoteService {
    @Autowired
    VoteRepository voteRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    ContentRepository contentRepository;

    public void newVote(Long userId, Long contentId, EVoteType voteType){
        Vote vote = voteRepository.findByUserUserIdAndContentId(userId, contentId);
        if(vote == null) {
            vote = new Vote();
            User user = userRepository.findByUserId(userId)
                    .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
            vote.setUser(user);
            Content content = contentRepository.findById(contentId)
                    .orElseThrow(() -> new RuntimeException("Content not found with ID: " + contentId));
            vote.setContent(content);
            vote.setVoteType(voteType);
        } else {
            vote.setVoteType(voteType);
        }
        voteRepository.save(vote);
    }

    public int getVoteCount(Long id){
        return voteRepository.getVoteCount(id);
    }

    public double getUserScore(Long id){
        return voteRepository.calculateUserScore(id);
    }
}
