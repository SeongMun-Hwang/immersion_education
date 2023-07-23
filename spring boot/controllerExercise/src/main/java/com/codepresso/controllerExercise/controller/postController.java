package com.codepresso.controllerExercise.controller;
import org.springframework.web.bind.annotation.*;
import com.codepresso.controllerExercise.dto.postDto;
import com.codepresso.controllerExercise.service.PostService;


@RestController
@RequestMapping(value = "/post")
public class postController {

    PostService postService;
    public postController(PostService postService){
        this.postService=postService;
    }
    @GetMapping
    public postDto getPost(@RequestParam Integer id){
        postDto result=postService.getPost(id);
        return result;

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
