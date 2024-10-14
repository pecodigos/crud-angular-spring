import { Component } from '@angular/core';
import { Game } from '../model/game';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {

  games: Game[] = [
    { _id: '1', name: 'Toy Story', genre: 'Animation'}
  ];
  displayedColumns = ['name', 'genre'];

  constructor(private gamesService: GamesService) {
    this.games = this.gamesService.list();
  }
}
