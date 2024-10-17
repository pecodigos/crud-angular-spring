package com.pecodigos.crud_spring.controller;

import com.pecodigos.crud_spring.dto.GameDTO;
import com.pecodigos.crud_spring.service.GameService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Validated
@RestController
@RequestMapping("/api/games")
@AllArgsConstructor
public class GameController {

    private final GameService gameService;

    @GetMapping
    public List<GameDTO> list() {
        return gameService.list();
    }

    @GetMapping("/{id}")
    public GameDTO findById(@PathVariable @NotNull @Positive Long id) {
        return gameService.findById(id);
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public GameDTO create(@RequestBody @Valid GameDTO game) {
        return gameService.create(game);
    }

    @PutMapping("/{id}")
    public GameDTO update(@PathVariable @NotNull @Positive Long id, @RequestBody @Valid GameDTO game) {
        return gameService.update(id, game);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable @NotNull @Positive Long id) {
        gameService.delete(id);
    }
}
