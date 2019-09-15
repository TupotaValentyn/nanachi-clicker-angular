import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.scss']
})
export class GamePanelComponent implements OnInit {


  points = [
    {
      width: '16px',
      height: '16px',
      top: '100%',
      left: '30%'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
