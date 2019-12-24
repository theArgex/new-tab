import { Component, OnInit } from '@angular/core';
import { ParticlesModule } from 'ng-particle';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'new-tab';
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 100,
        },
        color: {
        },
        line_linked: {
          enable: true,
          color: '#ffffff',
          opacity: 0.4,
          width: 2
        },
        shape: {
          type: 'triangle',
        },
      }
    };
  }
}
