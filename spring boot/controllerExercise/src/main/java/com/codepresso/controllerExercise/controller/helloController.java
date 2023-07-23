package com.codepresso.controllerExercise.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class helloController {
    @RequestMapping(value = "/")
    public String front(){
        return "this is spring boot<br>" +
                "<a href = '/practice/hello'>hello</a>"+ " "+
                "<a href = '/practice/bye'>bye</a>";
    }
    @RequestMapping(value = "/hello")
    public String hello(){
        return "hello" +
                "<a href = '/'>front</a>";
    }
    @RequestMapping(value = "/bye")
    public String bye(){
        return "bye" +
                "<a href = '/'>front</a>";
    }
}
