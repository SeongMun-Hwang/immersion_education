package com.codepresso.controllerExercise.config;
import com.codepresso.controllerExercise.service.PostService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
@Configuration
public class AppConfig {
    @Bean
    public PostService postService2(){
        return new PostService();
    }
}
