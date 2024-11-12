import { Component, Input, OnInit } from '@angular/core';
import { faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from 'src/app/models/interfaces/weather-interfaces';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {
  @Input() weatherDatasInput!: WeatherData;
  minTempICon = faTemperatureLow;
  maxTempIcon = faTemperatureHigh;
  winIcon = faWind;

  
}
