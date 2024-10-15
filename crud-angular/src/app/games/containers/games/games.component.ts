import { Component } from '@angular/core';
import { Game } from '../../model/game';
import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { GamesService } from '../../services/games.service';
import { catchError, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { SharedModule } from '../../../shared/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesListComponent } from "../../components/games-list/games-list.component";

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [AppMaterialModule,
    CommonModule,
    SharedModule, GamesListComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {

  games$: Observable<Game[]>;

  constructor(
    private gamesService: GamesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) {

    this.games$ = this.gamesService.list()
    .pipe(
      catchError(error => {
        this.onError('Error loading games.');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(game: Game) {
    this.router.navigate(['edit', game._id], {relativeTo: this.route})
  }
}
