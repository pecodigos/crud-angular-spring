import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../model/game';
import { delay, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private readonly API = 'api/games';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Game[]>(this.API)
    .pipe(
      first(),
      // delay(500),
      tap(games => console.log(games))
    );
  }

  save(record: Partial<Game>) {
    return this.httpClient.post<Game>(this.API, record);
  }
}
