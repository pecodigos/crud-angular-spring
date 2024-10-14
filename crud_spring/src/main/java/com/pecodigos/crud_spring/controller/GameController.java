package com.pecodigos.crud_spring.controller;

import com.pecodigos.crud_spring.model.Game;
import com.pecodigos.crud_spring.repository.GameRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/games")
@AllArgsConstructor
public class GameController {

    private final GameRepository gameRepository;

    @GetMapping
    public List<Game> list() {
        return gameRepository.findAll();
    }
}
