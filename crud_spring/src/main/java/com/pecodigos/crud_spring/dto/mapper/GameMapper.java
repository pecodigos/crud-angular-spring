package com.pecodigos.crud_spring.dto.mapper;

import com.pecodigos.crud_spring.dto.GameDTO;
import com.pecodigos.crud_spring.model.Game;
import org.springframework.stereotype.Component;

@Component
public class GameMapper {

    public GameDTO toDTO(Game game) {
        if (game == null) {
            return null;
        }
        return new GameDTO(game.getId(), game.getName(), game.getGenre(), game.getPlatform());
    }

    public Game toEntity(GameDTO gameDTO) {
        if (gameDTO == null) {
            return null;
        }

        var game = new Game();
        if (gameDTO._id() != null) {
            game.setId(game.getId());
        }
        game.setName(gameDTO.name());
        game.setGenre(gameDTO.genre());
        game.setPlatform(gameDTO.platform());
        game.setStatus("Active");

        return game;
    }
}
