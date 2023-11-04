export interface IWeather {
  current: {
    temp_c: number,
    is_day: number
    condition: {
      text: string,
      icon: string,
      code: number,
    }
    wind_mph: number,
    wind_kph: number,
    feelslike_c: number,
    cloud: number,
    humidity: number,
    pressure_mb: number,
    precip_mm:  number
  }
  location: {
    name: string,
    country: string,
    localtime: string,
  }
}
