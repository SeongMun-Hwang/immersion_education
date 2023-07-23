package com.codepresso.controllerExercise.dto;

public class postDto {
    Integer id;
    String title;
    String content;
    String username;

    public postDto(Integer id, String title, String content, String username) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.username = username;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public String getUsername() {
        return username;
    }
}
