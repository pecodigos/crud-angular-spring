package com.pecodigos.crud_spring;

import com.pecodigos.crud_spring.model.Game;
import com.pecodigos.crud_spring.repository.GameRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

    public static void main(String[] args) {
        SpringApplication.run(CrudSpringApplication.class, args);
    }

    @Bean
    CommandLineRunner initDatabase(GameRepository gameRepository) {
        return args -> {
            gameRepository.deleteAll();

            Game game = new Game();
            game.setName("Legend of Dragoon");
            game.setGenre("Turn-based RPG");
            game.setPlatform("Playstation 1");
            gameRepository.save(game);
        };
    }

}
