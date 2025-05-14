package com.LawAcrossBorders.LawAcrossBorders.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.LawAcrossBorders.LawAcrossBorders.service.PostService;
import com.LawAcrossBorders.LawAcrossBorders.service.S3Service;
import com.LawAcrossBorders.LawAcrossBorders.model.PostModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.HttpStatus;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {
    private final PostService postService;
    private final S3Service s3Service;

    public PostController(PostService postService, S3Service s3Service) {
        this.postService = postService;
        this.s3Service = s3Service;
    }

    // Get all posts
    @GetMapping
    public List<PostModel> getAllPosts() {
        return postService.getAllPosts();
    }

    // Create a new post
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public PostModel createPost(
            @ModelAttribute PostModel post,
            @RequestParam(value = "media", required = false) MultipartFile media) {
        if (media != null) {
            String mediaUrl = s3Service.uploadFile(media);
            post.setImageUrl(mediaUrl);
        }
        return postService.save(post);
    }

    // Update a post
    @PutMapping("/{id}")
    public PostModel updatePost(
            @PathVariable Long id,
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String content,
            @RequestParam(required = false) String publishedAt,
            @RequestParam(required = false) Boolean featured,
            @RequestParam(required = false) String keyTakeaways,
            @RequestParam(value = "media", required = false) MultipartFile media) {
        PostModel post = new PostModel();
        post.setId(id);
        post.setTitle(title);
        post.setContent(content);
        post.setPublishedAt(publishedAt);
        post.setFeatured(featured);
        post.setKeyTakeaways(keyTakeaways);
        if (media != null) {
            String mediaUrl = s3Service.uploadFile(media);
            post.setImageUrl(mediaUrl);
        }
        return postService.update(id, post);
    }

    // Delete a post
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost(@PathVariable Long id) {
        postService.delete(id);
    }

    // Get a post by id
    @GetMapping("/{id}")
    public PostModel getPostById(@PathVariable Long id) {
        return postService.getPostById(id);
    }
}
