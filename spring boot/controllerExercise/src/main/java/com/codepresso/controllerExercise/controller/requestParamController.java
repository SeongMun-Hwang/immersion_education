package com.codepresso.controllerExercise.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class requestParamController {
    @RequestMapping(value = "/post")
    public String getPost(@RequestParam(required = false, defaultValue = "default") String category,
                          @RequestParam Integer id){
        return "you request "+category+" - "+id+" post";
    }
    @RequestMapping(value = "/user/{type}/id/{id}")
    public String getUser(@PathVariable(name="type") String type,
                          @PathVariable(name="id") Integer id){
        return "you request "+type+" - "+id+" post";
    }
}
