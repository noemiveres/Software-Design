package com.utcn.demo.repository;

import com.utcn.demo.entity.Vote;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface VoteRepository extends CrudRepository<Vote, Long> {
    Vote findByUserUserIdAndContentId(Long userId, Long contentId);

    @Query("SELECT COUNT(v) FROM Vote v WHERE v.content.id = :id AND v.voteType = 'UPVOTE'")
    int getUpvoteCount(@Param("id") Long contentId);

    @Query("SELECT COUNT(v) FROM Vote v WHERE v.content.id = :id AND v.voteType = 'DOWNVOTE'")
    int getDownvoteCount(@Param("id") Long contentId);

    default int getVoteCount(Long contentId) {
        int upvoteCount = getUpvoteCount(contentId);
        int downvoteCount = getDownvoteCount(contentId);
        return upvoteCount - downvoteCount;
    }

    @Query("SELECT COUNT(v) FROM Vote v JOIN v.content c JOIN Answer a ON c.id = a.id " +
            "WHERE v.user.userId = :userId AND v.voteType = 'DOWNVOTE'")
    int getSelfDownvoteCount(@Param("userId") Long userId);


    @Query("SELECT COUNT(q) FROM Vote qv JOIN qv.content q " +
            "WHERE q.author.userId = :userId AND qv.voteType = 'UPVOTE' AND qv.content.id " +
            "IN (SELECT qq.id FROM Question qq WHERE qq.author.userId = :userId)")
    int getQuestionUpvoteCount(@Param("userId") Long userId);

    @Query("SELECT COUNT(a) FROM Vote av JOIN av.content a " +
            "WHERE a.author.userId = :userId AND av.voteType = 'UPVOTE' " +
            "AND av.content.id IN (SELECT aa.id FROM Answer aa WHERE aa.author.userId = :userId)")
    int getAnswerUpvoteCount(@Param("userId") Long userId);

    @Query("SELECT COUNT(q) FROM Vote qv JOIN qv.content q " +
            "WHERE q.author.userId = :userId AND qv.voteType = 'DOWNVOTE' AND qv.content.id " +
            "IN (SELECT qq.id FROM Question qq WHERE qq.author.userId = :userId)")
    int getQuestionDownvoteCount(@Param("userId") Long userId);

    @Query("SELECT COUNT(a) FROM Vote av JOIN av.content a WHERE a.author.userId = :userId AND av.voteType = 'DOWNVOTE' " +
            "AND av.content.id IN (SELECT aa.id FROM Answer aa WHERE aa.author.userId = :userId)")
    int getAnswerDownvoteCount(@Param("userId") Long userId);

    default double calculateUserScore(Long userId) {
        int questionUpvoteCount = getQuestionUpvoteCount(userId);
        int answerUpvoteCount = getAnswerUpvoteCount(userId);
        int questionDownvoteCount = getQuestionDownvoteCount(userId);
        int answerDownvoteCount = getAnswerDownvoteCount(userId);
        int selfDownvoteCount = getSelfDownvoteCount(userId);

        double score = (questionUpvoteCount * 2.5) + (answerUpvoteCount * 5)
                - (questionDownvoteCount * 1.5) - (answerDownvoteCount * 2.5) - (selfDownvoteCount * 1.5);

        return score;
    }

}
