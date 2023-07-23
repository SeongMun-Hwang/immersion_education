package com.codepresso.controllerExercise.controller;

import com.codepresso.controllerExercise.dto.postDto;
import org.springframework.web.bind.annotation.*;
import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
@RequestMapping(value = "/post")
public class postController {
    @GetMapping
    public String getPost(){
        return "GET /post";
    }
    @PostMapping
    public String savePost(@RequestBody postDto post){ //request body -> 전송
        System.out.println(post.getId());
        System.out.println(post.getTitle());
        System.out.println(post.getContent());
        System.out.println(post.getUsername());
        return "POST /post";
    }
    @PutMapping
    public String updatePost(){
        return "PUT /post";
    }
    @DeleteMapping
    public String deletePost(){
        return "DELETE /post";
    }
}
