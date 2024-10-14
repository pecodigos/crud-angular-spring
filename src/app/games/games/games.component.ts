import { Component } from '@angular/core';
import { Game } from '../model/game';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { GamesService } from '../services/games.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {

  games: Observable<Game[]>;
  displayedColumns = ['name', 'genre'];

  constructor(private gamesService: GamesService) {
    this.games = this.gamesService.list();
  }
}
