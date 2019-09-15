import { Player } from './../../../model/Player';
import { Component, OnInit } from '@angular/core';
import { GameServiceService } from 'src/app/services/game-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup-component',
  templateUrl: './setup-component.component.html',
  styleUrls: ['./setup-component.component.scss']
})
export class SetupComponentComponent implements OnInit {
  amountOfPlayer = 4;
  players: Player[];

  constructor(private gameService: GameServiceService,
              private router: Router) { }

  ngOnInit() {
    this.createPlayers();
  }

  onSubmit() {
    this.gameService.createGame(this.players);
    this.router.navigate(['/game']);
  }

  changeAmount(num: any) {
    this.amountOfPlayer = +num.target.options[num.target.selectedIndex]['value']
    this.createPlayers();
  }

  createPlayers() {
    this.players = []
    for (let index = this.amountOfPlayer - 1; index >= 0; index--) {
      this.players = [...this.players, this.getDefaultPlayer(index)]
    }
  }

  setClass(num: number) {
    switch (num) {
      case 0:
        return 'player_red';
      case 1:
        return 'player_yellow';
      case 2:
        return 'player_green';
      case 3:
        return 'player_blue';
    }
  }

  getDefaultPlayer(n) {
    return {width: 0, height: 0, picture: null, name: '', color: this.mapColor(n), score: 0}
  }

  mapColor(n) {
    switch (n) {
      case 0:
        return '#ea4335';
      case 1:
        return '#fbbc05';
      case 2:
        return '#34a853';
      case 3:
        return '#4285f4';
    }
  }

}
