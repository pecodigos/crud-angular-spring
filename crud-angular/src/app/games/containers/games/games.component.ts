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
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [AppMaterialModule,
    CommonModule,
    SharedModule,
    GamesListComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {

  games$: Observable<Game[]> | null = null;

  constructor(
    private gamesService: GamesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) {

    this.refresh();
  }

  refresh() {
    this.games$ = this.gamesService.list()
    .pipe(
      catchError(() => {
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
    this.router.navigate(['edit', game._id], {relativeTo: this.route});
  }

  onRemove(game: Game) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Are you sure that you want to remove this game?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.gamesService.remove(game._id).subscribe( {
        next: () => {
          this.refresh(),
          this.snackBar.open('Game deleted successfully!', 'X',
            {duration: 4000, verticalPosition: 'top', horizontalPosition: 'center'});
        },
        error: () => this.onError('Error while trying to remove a game.')
        });
      }
    });
  }
}
