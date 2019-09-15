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
      color: '#ea4335',
      picture: '',
      score: 0
    }, {
      width: 56,
      height: 16,
      name: 'NIP',
      color: '#fbbc05',
      picture: '',
      score: 0
    }, {
      width: 46,
      height: 26,
      name: 'NAN',
      color: '#34a853',
      picture: '',
      score: 0
    }, {
      width: 46,
      height: 17,
      name: 'CUS',
      color: '#4285f4',
      picture: '',
      score: 0
    }
  ];

  winner: Player;

  createGame(players: Player[]) {
    this.players = players;
  }

  get getPlayers() {
    return this.players;
  }

  setWinner(player: Player) {
    this.winner = player;
  }

  get getWinner() {
    return this.winner;
  }

}
