import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Routine, RoutineService } from './routine.service';
import { SessionService } from './routine.sessionservice';

@Component({
  template: `
  <h2>ROUTINES</h2>
  <div *ngIf="routine">
    <h3>"{{ routine.type }}"</h3>
    <div>
      <label>Id: </label>{{ routine._id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="routine.type" placeholder="name"/>
    </div>

    <ul class="items">
      <li *ngFor="let behaviour of routine.behaviours">
        <span class="badge">{{ behaviour.description }}</span> {{ behaviour.description }}
      </li>
    </ul>

    <p>
      <button (click)="gotoHeroes()">Back</button>
    </p>
  </div>
  `,
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class RoutineDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }
  @HostBinding('style.display') get display() {
    return 'block';
  }
  @HostBinding('style.position') get position() {
    return 'absolute';
  }

  routine: Routine;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RoutineService,
    private sessionservice : SessionService
  ) {}

  ngOnInit() {
    this.routine = this.sessionservice.getSelectedRoutine();

    console.log("RoutineDetailComponent:" + this.route.params);
    //this.route.params
      // (+) converts string 'id' to a number
      //.switchMap((params: Params) => this.service.getRoutine(params['_id']))
      //.subscribe((routine: Routine) => this.routine = routine);
  }

  gotoHeroes() {
    let heroId = this.routine ? this.routine._id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    this.router.navigate(['/routines', { _id: heroId, foo: 'foo' }]);
  }
}
