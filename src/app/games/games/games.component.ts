import { Component } from '@angular/core';
import { Game } from '../model/game';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { GamesService } from '../services/games.service';
import { catchError, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [AppMaterialModule,
    CommonModule,
    SharedModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {

  games$: Observable<Game[]>;
  displayedColumns = ['name', 'genre', 'platform'];

  constructor(
    private gamesService: GamesService,
    public dialog: MatDialog) {
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
}
