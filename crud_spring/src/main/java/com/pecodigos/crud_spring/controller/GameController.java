package com.pecodigos.crud_spring.controller;

import com.pecodigos.crud_spring.model.Game;
import com.pecodigos.crud_spring.repository.GameRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/games")
@AllArgsConstructor
public class GameController {

    private final GameRepository gameRepository;

    @GetMapping
    public @ResponseBody List<Game> list() {
        return gameRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Game create(@RequestBody Game game) {
        return gameRepository.save(game);
    }
}
