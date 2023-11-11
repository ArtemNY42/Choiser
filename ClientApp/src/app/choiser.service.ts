import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';
import { DataService } from './services/data.service';
import { GenericResult } from './models/system.dto';
  
@Injectable()  
export class ChoiserService {  
  constructor(private dataService: DataService) {   
  }  
    
    public getWeatherForecast() {
      return this.dataService.get<GenericResult>('weatherforecast');
    }


}