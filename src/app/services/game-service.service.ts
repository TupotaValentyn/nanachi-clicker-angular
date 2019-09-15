import {Injectable} from '@angular/core';
import {Player} from 'src/model/Player';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor() {
  }

  players = [
    {
      width: 16,
      height: 16,
      name: 'PIN',
      color: 'red',
      picture: '',
      score: 0
    }, {
      width: 56,
      height: 16,
      name: 'NIP',
      color: 'red',
      picture: '',
      score: 0
    }, {
      width: 46,
      height: 26,
      name: 'NANACHI',
      color: 'red',
      picture: '',
      score: 0
    }, {
      width: 46,
      height: 17,
      name: 'CUSTOM',
      color: 'red',
      picture: '',
      score: 0
    }
  ];

  createGame(players: Player[]) {
    this.players = players;
  }

  get getPlayers() {
    return this.players;
  }

}
