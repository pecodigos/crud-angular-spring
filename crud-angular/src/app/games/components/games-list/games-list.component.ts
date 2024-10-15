import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../model/game';
import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { SharedModule } from "../../../shared/shared.module";

@Component({
  selector: 'app-games-list',
  standalone: true,
  imports: [AppMaterialModule, SharedModule],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.scss'
})
export class GamesListComponent {

  @Input() games: Game[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['name', 'genre', 'platform', 'actions'];

  constructor() {}

  onAdd() {
    this.add.emit(true);
  }

  onEdit(game: Game) {
    this.edit.emit(game);
  }
}
