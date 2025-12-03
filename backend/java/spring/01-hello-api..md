# Spring Boot Hello World

```java
// src\main\java\com\example\demo\DemoApplication.java
package com.frankgp.hello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
// public, private, o protected
public class HelloApplication {

    public static void main(String[] args) {
        SpringApplication.run(HelloApplication.class, args);
    }

    @GetMapping("/")
    public String hello() {
        return "Hello, World! 123";
    }
}

```

# Controller

```java
// src\main\java\com\example\demo\DemoController.java
package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {
    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }
}
```
