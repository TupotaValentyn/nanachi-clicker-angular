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
    this.players = [];
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
    return {width: 0, height: 0, picture: this.mapFile(n), name: '', color: this.mapColor(n), score: 0}
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

  mapFile(n) {
    switch (n) {
      case 0:
        return 'https://vignette.wikia.nocookie.net/miabyss/images/9/9e/Nanachi_Manga.png/revision/latest?cb=20170710002744';
      case 1:
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUqV2XEY79EWLrNE-DYS77p2vPEALxjDBGuSGtohyqfAIDdA2OA';
      case 2:
        return 'https://pbs.twimg.com/media/D9zEplUXkAEnDaH.jpg';
      case 3:
        return 'http://pm1.narvii.com/7025/c49672883c75098ee7038c4742c08686344d809br1-225-350v2_uhq.jpg';
    }
  }

}
