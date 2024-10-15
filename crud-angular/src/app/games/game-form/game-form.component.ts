import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GamesService } from '../services/games.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-game-form',
  standalone: true,
  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './game-form.component.html',
  styleUrl: './game-form.component.scss'
})
export class GameFormComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: GamesService,
    private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      name: [null],
      genre: [null],
      platform: [null]
    });
   }

    onSubmit() {
      this.service.save(this.form.value).subscribe({
        next: (result) => console.log(result),
        error: () => {
          this.onError();
        },
      });
    }

    onCancel() {

    }

    private onError() {
      this.snackBar.open('Error saving game', '', { duration: 4000})
    }
}
