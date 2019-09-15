import { Injectable } from '@angular/core';
import { Player } from 'src/model/Player';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor() { }

  createGame(players: Player[]) {
    console.dir("create game: ", players )

    console.log(players)
  }
}
