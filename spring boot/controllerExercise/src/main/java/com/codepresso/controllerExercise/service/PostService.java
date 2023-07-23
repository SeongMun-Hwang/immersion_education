package com.codepresso.controllerExercise.service;
import com.codepresso.controllerExercise.dto.postDto;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    public postDto getPost(Integer id){
        System.out.println("find post data from database by "+ id);
        System.out.println("validate data from database");
        System.out.println("process data if necessary");

        return new postDto(id,"title","this is content","dhlee");
    }
}
