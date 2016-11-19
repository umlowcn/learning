import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }          from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MorningComponent } from './components/pages/morning.component';
import { EveningComponent } from './components/pages/evening.component';
import { BedtimeComponent } from './components/pages/bedtime.component';
import { RoutineComponent } from './components/pages/routine.component';

import { RoutineListComponent }  from './components/pages/routine-list.component';

import { RoutinesModule }   from './components/routines/routines.module';

@NgModule({
  imports: [ 
      BrowserModule, 
      HttpModule, 
      FormsModule,
      RoutinesModule,
      AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    NavbarComponent,
    RoutineComponent,
    MorningComponent,
    EveningComponent,
    BedtimeComponent,
    RoutineListComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
