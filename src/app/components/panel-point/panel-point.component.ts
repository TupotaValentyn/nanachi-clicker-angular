import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../../model/Game';

@Component({
  selector: 'app-panel-point',
  templateUrl: './panel-point.component.html',
  styleUrls: ['./panel-point.component.scss']
})
export class PanelPointComponent implements OnInit {

  @Input() width: number;
  @Input() height: number;
  @Input() name: string;
  @Input() background: string;
  @Input() point: Player;

  size = '48px';

  constructor() {
  }

  ngOnInit() {
  }

  counter() {
    if (this.point.score) {
      this.point.score++;
      console.log(this.name, this.point.score);
      return;
    }

    this.point.score = 1;
  }


}
