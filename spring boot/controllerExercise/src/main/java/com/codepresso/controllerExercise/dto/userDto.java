package com.codepresso.controllerExercise.dto;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

public class userDto {
    Integer id;
    String name;
    String email;
    List<String> specialties;

    public userDto(Integer id, String name, String email, List<String> specialties) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.specialties = specialties;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public List<String> getSpecialties() {
        return specialties;
    }
}
