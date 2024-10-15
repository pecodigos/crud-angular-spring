package com.pecodigos.crud_spring.controller;

import com.pecodigos.crud_spring.model.Game;
import com.pecodigos.crud_spring.repository.GameRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/games")
@AllArgsConstructor
public class GameController {

    private final GameRepository gameRepository;

    @GetMapping
    public @ResponseBody List<Game> list() {
        return gameRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Game> findById(@PathVariable Long id) {
        return gameRepository.findById(id)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Game create(@RequestBody Game game) {
        return gameRepository.save(game);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Game> update(@PathVariable Long id, @RequestBody Game game) {
        return gameRepository.findById(id)
                .map(record -> {
                    record.setName(game.getName());
                    record.setGenre(game.getGenre());
                    record.setPlatform(game.getPlatform());
                    Game updated = gameRepository.save(record);
                    return ResponseEntity.ok().body(updated);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return gameRepository.findById(id)
                .map(record -> {
                    gameRepository.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
