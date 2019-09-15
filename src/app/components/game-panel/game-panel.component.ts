import {Component, OnInit} from '@angular/core';
import {Player} from '../../../model/Player';
import {interval} from 'rxjs';

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

  constructor() {
  }


  magic() {
    this.points = this.points.map(item => {
      const {width, height} = this.randomizer();

      return {...item, width, height};
    });
  }

  randomizer() {
    const width = Math.floor(Math.random() * 101);
    const height = Math.floor(Math.random() * 101);

    return {width, height};
  }

  ngOnInit() {
    interval(5000).subscribe(() => {
      const element = this.points.find(item => item.score === Math.min(...this.points.map(el => el.score)));
      this.points = this.points.filter(it => it !== element);
      this.points[this.points.length - 1].score += element.score;
      this.magic();
    });
  }

}
