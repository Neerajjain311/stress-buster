import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CastExpr } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'stress-buster';
}
