package com.pecodigos.crud_spring.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import org.hibernate.validator.constraints.Length;

public record GameDTO(Long _id,
                      @NotNull @NotBlank @Length(min = 2, max = 100) String name,
                      @NotNull @Length(max = 20) @Pattern(regexp = "Turn-based RPG|FPS") String genre,
                      @NotNull @Length(max = 20) @Pattern(regexp = "Playstation 1|PC") String platform) {
}
