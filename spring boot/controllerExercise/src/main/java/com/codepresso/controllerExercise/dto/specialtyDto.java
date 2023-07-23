package com.codepresso.controllerExercise.dto;

public class specialtyDto {
    String name;
    String level;

    public specialtyDto(String name, String level) {
        this.name = name;
        this.level = level;
    }

    public String getName() {
        return name;
    }

    public String getLevel() {
        return level;
    }
}

