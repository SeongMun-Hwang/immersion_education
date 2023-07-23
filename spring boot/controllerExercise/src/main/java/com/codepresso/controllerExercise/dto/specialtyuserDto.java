package com.codepresso.controllerExercise.dto;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

public class specialtyuserDto {
    Integer id;
    String name;
    String email;
    List<specialtyDto> specialities;

    public specialtyuserDto(Integer id, String name, String email, List<specialtyDto> specialities) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.specialities = specialities;
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

    public List<specialtyDto> getSpecialties() {
        return specialities;
    }
}
