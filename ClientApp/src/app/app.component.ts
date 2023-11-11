import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Choiser';
  tabIndex: number = 1; //4;
  isEntered: boolean = false;//true;

  setIndex(event: number){
    this.tabIndex = event;
  }

  closeEnterDialog(event: boolean){
    this.tabIndex = 1;
  }

  entering(event: boolean){
      this.isEntered = event;
  }
}
