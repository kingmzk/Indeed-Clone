package com.indeed.server.service;

import com.indeed.server.dto.PostDTO;
import com.indeed.server.model.PostModel;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface PostService {
    public PostModel savePost(PostDTO postDTO);

    public List<PostModel> getAllPosts();
}
