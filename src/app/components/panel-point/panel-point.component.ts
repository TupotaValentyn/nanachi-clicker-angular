import {Component, Input, OnInit} from '@angular/core';

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
  @Input() score: number;

  size = '48px';

  constructor() {
  }

  ngOnInit() {
  }

  counter() {
    if (this.score) {
      this.score++;
      console.log(this.name, this.score);
      return;
    }

    this.score = 1;
  }


}
