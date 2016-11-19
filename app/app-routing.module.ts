import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MorningComponent } from './components/pages/morning.component';
import { EveningComponent } from './components/pages/evening.component';
import { BedtimeComponent } from './components/pages/bedtime.component';
import { RoutineComponent } from './components/pages/routine.component';

import { RoutineListComponent }  from './components/pages/routine-list.component';

const appRoutes: Routes = [
  { path: '', component: RoutineComponent} ,
  { path: 'morning', component: MorningComponent },
  { path: 'evening', component: EveningComponent },
  { path: 'bedtime', component: BedtimeComponent },
  { path: 'routine-list', component: RoutineListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
