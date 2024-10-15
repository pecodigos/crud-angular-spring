import { Game } from './../model/game';
import { ResolveFn } from '@angular/router';
import { GamesService } from '../services/games.service';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';

export const gameResolver: ResolveFn<Observable<Game>> = (route, state, service: GamesService = inject(GamesService)) => {

  if (route.params?.['id']) {
    return service.loadById(route.params['id']);
  }
  return of({_id:'', name: '', genre: '', platform: ''});
};
