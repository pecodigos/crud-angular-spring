package com.pecodigos.crud_spring.service;

import com.pecodigos.crud_spring.dto.GameDTO;
import com.pecodigos.crud_spring.dto.mapper.GameMapper;
import com.pecodigos.crud_spring.exceptions.RecordNotFoundException;
import com.pecodigos.crud_spring.repository.GameRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class GameService {

    private final GameRepository gameRepository;
    private final GameMapper gameMapper;

    public List<GameDTO> list() {
        return gameRepository.findAll()
                .stream().map(gameMapper::toDTO)
                .collect(Collectors.toList());
    }

    public GameDTO findById(Long id) {
        return gameRepository.findById(id)
                .map(gameMapper::toDTO)
                .orElseThrow(() -> new RecordNotFoundException(id));
    }

    public GameDTO create(GameDTO game) {
        return gameMapper.toDTO(gameRepository.save(gameMapper.toEntity(game)));
    }

    public GameDTO update(Long id, GameDTO game) {
        return gameRepository.findById(id)
                .map(data -> {
                    data.setName(game.name());
                    data.setGenre(game.genre());
                    data.setPlatform(game.platform());
                    return gameMapper.toDTO(gameRepository.save(data));
                })
                .orElseThrow(() -> new RecordNotFoundException(id));
    }

    public void delete(Long id) {
        gameRepository.delete(gameRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(id)));
    }
}
