import { Component, EventEmitter, Output, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ChoiserService } from "../choiser.service";

@Component({
    selector: 'app-enterDialog',
    templateUrl: './enterDialog.component.html',
    styleUrls: ['./enterDialog.component.scss']
})
export class EnterDialogComponent{

    @Output() visible = new EventEmitter<boolean>();
    @Output() isEntered = new EventEmitter<boolean>();
    login: any = "";
    password: any = "";
    repeatPassword: any = "";
    registration: boolean = false;

    public forecasts: WeatherForecast[] = [];

    constructor(private choiserService: ChoiserService) {
        
    }

    ngOnInit(){
        console.log("Entering");
        this.choiserService.getWeatherForecast().subscribe(result => {
            this.forecasts = result.Item;
        }, error => console.error(error));

        // this.http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
        //     this.forecasts = result;
        //   }, error => console.error(error));
    }
    
    onClose(event: boolean){
        this.visible.emit(false);
        this.isEntered.emit(event);
    }

    setRegistration(){
        this.registration = !this.registration;
    }
}

interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}