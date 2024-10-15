import { Component, Input } from '@angular/core';
import { Game } from '../model/game';
import { Router, ActivatedRoute } from '@angular/router';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: 'app-games-list',
  standalone: true,
  imports: [AppMaterialModule, SharedModule],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.scss'
})
export class GamesListComponent {

  @Input() games: Game[] = [];
  displayedColumns = ['name', 'genre', 'platform', 'actions'];

  constructor(
    private router: Router,
    private route: ActivatedRoute) {}

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
