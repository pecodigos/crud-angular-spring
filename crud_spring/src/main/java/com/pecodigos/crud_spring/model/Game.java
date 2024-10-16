package com.pecodigos.crud_spring.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.SQLRestriction;
import org.hibernate.validator.constraints.Length;

@Data
@Entity
@SQLDelete(sql = "UPDATE Game SET status = 'Inactive' WHERE id = ?")
@SQLRestriction("status <> 'Inactive'")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("_id")
    private Long id;

    @NotNull
    @NotBlank
    @Length(min = 2, max = 100)
    @Column(length = 100, nullable = false)
    private String name;

    @NotNull
    @Length(max = 20)
    @Pattern(regexp = "Turn-based RPG|FPS")
    @Column(length = 20, nullable = false)
    private String genre;

    @NotNull
    @Length(max = 20)
    @Pattern(regexp = "Playstation 1|PC")
    @Column(length = 20, nullable = false)
    private String platform;

    @NotNull
    @Length(max = 20)
    @Pattern(regexp = "Active|Inactive")
    @Column(length = 20, nullable = false)
    private String status = "Active";
}
