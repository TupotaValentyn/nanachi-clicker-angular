import {Component, OnInit} from '@angular/core';
import {Player} from '../../../model/Game';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.scss']
})
export class GamePanelComponent implements OnInit {

  points: Player[] = [
    {
      width: 16,
      height: 16,
      name: 'PIN',
      color: 'red',
      picture: '',
      score: 0
    } ,{
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

  constructor() {
  }

  ngOnInit() {
  }

}
