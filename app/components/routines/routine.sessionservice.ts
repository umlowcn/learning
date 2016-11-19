import { Injectable } from '@angular/core';
import { Routine } from './routine.service';

@Injectable()
export class SessionService {
    routine : Routine;

    constructor(){

    }

    getSelectedRoutine() {
        return this.routine;
    }

    setSelectedRoutine(routine : Routine) {
        this.routine = routine;
    }
}