import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './containers/games/games.component';
import { GameFormComponent } from './containers/game-form/game-form.component';

const routes: Routes = [
  { path: '', component: GamesComponent },
  { path: 'new', component: GameFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
