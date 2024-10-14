import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpCleint: HttpClient) { }

  list() {
    return [
      { _id: '1', name: 'Toy Story', genre: 'Animation'}
    ];
  }
}
