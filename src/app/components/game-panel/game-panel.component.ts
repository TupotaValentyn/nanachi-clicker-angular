import {Component, OnInit} from '@angular/core';
import {Player} from '../../../model/Player';
import {interval} from 'rxjs';
import {GameServiceService} from '../../services/game-service.service';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.scss']
})
export class GamePanelComponent implements OnInit {

  points: Player[];

  constructor(private gameService: GameServiceService) {
  }


  ngOnInit() {
    this.points = this.gameService.getPlayers;

    interval(5000).subscribe(() => {
      const element = this.points.find(item => item.score === Math.min(...this.points.map(el => el.score)));
      this.points = this.points.filter(it => it !== element);

      if (this.points.length === 0) {
        return false;
      }

      this.points[this.points.length - 1].score += element.score;
      this.magic();
    });
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

}
