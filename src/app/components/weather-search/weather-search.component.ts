import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {WeatherService} from "../../servises";
import {IWeather} from "../../interfaces";

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  form: FormGroup;
  weather: IWeather;

  constructor(private weatherService:WeatherService) {
    this.initForm();
  }

  ngOnInit(): void {

  }

  initForm(): void {
    this.form = new FormGroup({
      search: new FormControl(null, [Validators.required])
    })
  }

  search() {
    const searchText = this.form.value.search.trim();
    this.weatherService.getWeather(searchText).subscribe(value => {
      console.log(value);
      this.weather = value;
    })
    this.form.reset()
  }
}
