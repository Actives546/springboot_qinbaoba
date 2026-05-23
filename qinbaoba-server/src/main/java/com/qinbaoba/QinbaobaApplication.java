package com.qinbaoba;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.qinbaoba.mapper")
public class QinbaobaApplication {

    public static void main(String[] args) {
        SpringApplication.run(QinbaobaApplication.class, args);
    }
}
