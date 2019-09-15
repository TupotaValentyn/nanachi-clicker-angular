import {Player} from './../../../model/Player';
import {Component, OnInit} from '@angular/core';
import {GameServiceService} from '../../services/game-service.service';

@Component({
  selector: 'app-endingpage',
  templateUrl: './endingpage.component.html',
  styleUrls: ['./endingpage.component.scss']
})
export class EndingpageComponent implements OnInit {
  winner: Player;

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor(private userService: GameServiceService) {
  }

  ngOnInit() {
    // this.winner = {
    //   width: 0,
    //   height: 0,
    //   picture: "",
    //   name: "Nanachi",
    //   color: "#ea4335",
    //   score: 0
    // };

    this.winner = this.userService.getWinner;

    this.myStyle = {
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      'z-index': 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    this.myParams = {
      'particles': {
        'number': {'value': 80, 'density': {'enable': true, 'value_area': 1025.940511234049}},
        'color': {'value': '#ffffff'},
        'shape': {
          'type': 'edge',
          'stroke': {'width': 11, 'color': this.winner['color']},
          'polygon': {'nb_sides': 7},
          'image': {'src': 'img/github.svg', 'width': 100, 'height': 100}
        },
        'opacity': {'value': 0.4340417323087804, 'random': true, 'anim': {'enable': false, 'speed': 1, 'opacity_min': 0.1, 'sync': false}},
        'size': {'value': 44.20795421663504, 'random': true, 'anim': {'enable': false, 'speed': 40, 'size_min': 0.1, 'sync': false}},
        'line_linked': {
          'enable': true,
          'distance': 64.30247886056004,
          'color': '#ffffff',
          'opacity': 0.6751760280358806,
          'width': 2.250586760119602
        },
        'move': {
          'enable': true,
          'speed': 14.468057743626014,
          'direction': 'none',
          'random': true,
          'straight': false,
          'out_mode': 'out',
          'bounce': false,
          'attract': {'enable': false, 'rotateX': 600, 'rotateY': 1200}
        }
      },
      'interactivity': {
        'detect_on': 'canvas',
        'events': {'onhover': {'enable': true, 'mode': 'bubble'}, 'onclick': {'enable': true, 'mode': 'push'}, 'resize': true},
        'modes': {
          'grab': {'distance': 400, 'line_linked': {'opacity': 1}},
          'bubble': {'distance': 400, 'size': 40, 'duration': 2, 'opacity': 8, 'speed': 3},
          'repulse': {'distance': 200, 'duration': 0.4},
          'push': {'particles_nb': 4},
          'remove': {'particles_nb': 2}
        }
      },
      'retina_detect': true
    };

  }
}
