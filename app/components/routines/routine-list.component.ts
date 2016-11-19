import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Routine, RoutineService } from './routine.service';
import { SessionService } from './routine.sessionservice';

@Component({
    template: `
    <h2>ROUTINES LIST</h2>
    <ul class="items">
      <li *ngFor="let routine of routines"
        [class.selected]="isSelected(routine)"
        (click)="onSelect(routine)">
        <span class="badge">{{ routine.type }}</span> {{ routine.firstName }}
      </li>
    </ul>
  `
})

export class RoutineListComponent implements OnInit {
    routines: Routine[];
    private selectedId: string;

    constructor(
        private service: RoutineService,
        private route: ActivatedRoute,
        private router: Router,
        private sessionService: SessionService
    ) { }

//   getRoutines(): void {
//     this.service.getRoutines().then(routines => {
//         console.log("getRoutines()");
//         this.routines = routines;
//          console.log(this.routines);
//         });
//   }

    getRoutines() {
        return this.service.getRoutinesTest()
            .subscribe((data: Routine[]) => 
            {
                this.routines = data
            });
    }

  ngOnInit(): void {
    this.getRoutines();
  }

    // ngOnInit() {

    //           return this.service.getRoutines()
    //         .subscribe((data: Routine[]) => this.routines = data);

    //         this.service
    //     .getRoutines()
    //     .then(routines => { 
    //         console.log(routines);
    //         this.routines = routines; 
    //     });

    //     // this.routines = this.route.params
    //     //     .switchMap((params: Params) => {
    //     //         this.selectedId = +params['_id'];
    //     //         return this.service.getRoutines();
    //     //     });
    // }

    isSelected(routine: Routine) { return routine._id === this.selectedId; }

    onSelect(routine: Routine) {
        this.sessionService.setSelectedRoutine(routine);
        this.router.navigate(['/routine', routine._id]);
    }
}