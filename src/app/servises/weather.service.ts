import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IWeather} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {
  }

  getWeather(searchText: string): Observable<IWeather> {
    return this.httpClient.get<IWeather>(`${urls.weather}${searchText}`)
  }
}
