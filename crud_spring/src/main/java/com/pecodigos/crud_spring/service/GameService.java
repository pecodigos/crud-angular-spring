package com.pecodigos.crud_spring.service;

import com.pecodigos.crud_spring.exceptions.RecordNotFoundException;
import com.pecodigos.crud_spring.model.Game;
import com.pecodigos.crud_spring.repository.GameRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class GameService {

    private final GameRepository gameRepository;

    public List<Game> list() {
        return gameRepository.findAll();
    }

    public Game findById(Long id) {
        return gameRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(id));
    }

    public Game create(Game game) {
        return gameRepository.save(game);
    }

    public Game update(Long id, Game game) {
        return gameRepository.findById(id)
                .map(data -> {
                    data.setName(game.getName());
                    data.setGenre(game.getGenre());
                    data.setPlatform(game.getPlatform());
                    return gameRepository.save(data);
                })
                .orElseThrow(() -> new RecordNotFoundException(id));
    }

    public void delete(Long id) {
        gameRepository.delete(gameRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(id)));
    }
}
