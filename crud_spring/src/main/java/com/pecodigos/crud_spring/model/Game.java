package com.pecodigos.crud_spring.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 200, nullable = false)
    private String name;

    @Column(length = 30, nullable = false)
    private String genre;

    @Column(length = 50, nullable = false)
    private String platform;
}
