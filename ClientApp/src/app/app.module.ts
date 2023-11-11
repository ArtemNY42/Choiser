import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// import { DialogModule } from 'primeng/dialog';
// import { AutoCompleteModule } from 'primeng/autocomplete';
// import { InputTextModule } from 'primeng/inputtext';
// import { AnimateModule } from 'primeng/animate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { NavigationComponent } from './navigation/navigation.component';
import { EnterDialogComponent} from './enterDialog/enterDialog.component';
import { ProfilePage } from './profilePage/profilePage.component';
import { ChoiserService } from './choiser.service';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    NavigationComponent,
    EnterDialogComponent,
    ProfilePage
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [ ChoiserService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
