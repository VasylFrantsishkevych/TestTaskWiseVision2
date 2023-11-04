import {Component, Input, OnInit} from '@angular/core';

import {IWeather} from "../../interfaces";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input()
  weather: IWeather

  constructor() {
  }

  ngOnInit(): void {
  }
}
