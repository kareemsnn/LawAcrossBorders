package com.LawAcrossBorders.LawAcrossBorders.service;

import org.springframework.stereotype.Service;
import com.LawAcrossBorders.LawAcrossBorders.model.PostModel;
import com.LawAcrossBorders.LawAcrossBorders.repository.PostRepository;

import java.util.List;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final S3Service s3Service;

    public PostService(PostRepository postRepository, S3Service s3Service) {
        this.postRepository = postRepository;
        this.s3Service = s3Service;
    }

    public List<PostModel> getAllPosts() {
        return postRepository.findAll();
    }

    public PostModel save(PostModel post) {
        return postRepository.save(post);
    }
    // Could need changing to save only the fields that are being updated
    public PostModel update(Long id, PostModel post) {
        return postRepository.save(post);
    }

    public void delete(Long id) {
        postRepository.deleteById(id);
        // s3Service.deleteFile(id.toString());
    }

    public PostModel getPostById(Long id) {
        return postRepository.findById(id).orElse(null);
    }
}
