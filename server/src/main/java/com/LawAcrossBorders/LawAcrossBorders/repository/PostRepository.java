package com.LawAcrossBorders.LawAcrossBorders.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.LawAcrossBorders.LawAcrossBorders.model.PostModel;

public interface PostRepository extends JpaRepository<PostModel, Long> {
    
}
