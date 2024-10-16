package com.pecodigos.crud_spring.controller;

import com.pecodigos.crud_spring.model.Game;
import com.pecodigos.crud_spring.repository.GameRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Validated
@RestController
@RequestMapping("/api/games")
@AllArgsConstructor
public class GameController {

    private final GameRepository gameRepository;

    @GetMapping
    public List<Game> list() {
        return gameRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Game> findById(@PathVariable @NotNull @Positive Long id) {
        return gameRepository.findById(id)
                .map(data -> ResponseEntity.ok().body(data))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Game create(@RequestBody @Valid Game game) {
        return gameRepository.save(game);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Game> update(@PathVariable @NotNull @Positive Long id, @RequestBody @Valid Game game) {
        return gameRepository.findById(id)
                .map(data -> {
                    data.setName(game.getName());
                    data.setGenre(game.getGenre());
                    data.setPlatform(game.getPlatform());
                    Game updated = gameRepository.save(data);
                    return ResponseEntity.ok().body(updated);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable @NotNull @Positive Long id) {
        return gameRepository.findById(id)
                .map(data -> {
                    gameRepository.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
