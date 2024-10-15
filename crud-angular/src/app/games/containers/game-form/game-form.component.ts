import { Component } from '@angular/core';
import { ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-form',
  standalone: true,
  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './game-form.component.html',
  styleUrl: './game-form.component.scss'
})
export class GameFormComponent {

  form = this.formBuilder.group({
    name: [''],
    genre: [''],
    platform: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: GamesService,
    private snackBar: MatSnackBar,
    private location: Location) {

   }

    onSubmit() {
      this.service.save(this.form.value).subscribe({
        next: () => {
          this.onSuccess();
          this.location.back();
        },
        error: () => {
          this.onError();
        },
      });
    }

    onCancel() {
      this.location.back();
    }

    private onSuccess() {
      this.snackBar.open('Game saved sucessfully!', '', { duration: 4000})
    }

    private onError() {
      this.snackBar.open('Error saving game.', '', { duration: 4000})
    }
}
