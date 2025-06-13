package com.frankgp.hello;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String hello() {
        return "Hello World!";
    }

    @GetMapping("/map")
    public Map<String, String> helloMap() {
        return Map.of("hello", "world");
    }

    @GetMapping("/list")
    public List<Map<String, String>> helloList() {
        return List.of(
                Map.of("hello", "world"));
    }
}
