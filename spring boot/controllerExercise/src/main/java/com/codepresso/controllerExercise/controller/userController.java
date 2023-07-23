package com.codepresso.controllerExercise.controller;

import com.codepresso.controllerExercise.dto.userDto;
import com.codepresso.controllerExercise.dto.specialtyuserDto;
import com.codepresso.controllerExercise.dto.specialtyDto;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class userController {
    @RequestMapping(value = "/paid")
    public String getPaidUser(){
        return "I'm a paid user.";
    }
    @RequestMapping(value = "/enterprise")
    public String getEnterpriseUser(){
        return "I'm a enterprise user.";
    }
    @RequestMapping(value = "/user")
    public userDto getUser(){
        List<String> specialities=new ArrayList<>();
        specialities.add("Java");
        specialities.add("Spring Boot");
        return new userDto(1,"Jin","Jin@naver.com",specialities);
    }
    @RequestMapping(value = "/user/specialty")
    public specialtyuserDto getUserSpecialty(){
        List<specialtyDto> specialities=new ArrayList<>();
        specialities.add(new specialtyDto("Java","Advanced"));
        specialities.add(new specialtyDto("Spring Boot","Basic"));
        return new specialtyuserDto(1,"Jin","Jin@naver.com",specialities);
    }
}
