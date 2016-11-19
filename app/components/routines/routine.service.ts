import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export class Routine {
    _id: string;
    behaviour: string;
    //behaviours: IBehaviour[];
    star: number;
    type: string;   
    //constructor(public id: number, public name: string) { }
    // _id: string;
    // firstName: string;
    // lastName: string;
}



// let Routines = [
//     // new Routine(11, 'Mr. Nice'),
//     // new Routine(12, 'Narco'),
//     // new Routine(13, 'Bombasto'),
//     // new Routine(14, 'Celeritas'),
//     // new Routine(15, 'Magneta'),
//     // new Routine(16, 'RubberMan')
// ];

//let RoutinesPromise = Promise.resolve(Routines);


@Injectable()
export class RoutineService {
    constructor(private http: Http) { }

    // getRoutines(): Promise<Routine[]> {
    //     return this.http.get('http://localhost:3000/api/rewards')
    //         .toPromise()
    //         .then(response => 
    //         {   
    //             console.log("api returns");
    //             console.log(response.json());
    //             response.json() as Routine[];
    //         })
    //         .catch(this.handleError);
    // }

   //  getRoutine(id: string): Observable<Routine> {
   //     return this.getRoutines()
    //         .then(rountines => rountines.find(rountine => rountine._id === id));
   //  }

    getRoutinesTest(): Observable<Routine[]> {
        return this.http.get('http://localhost:3000/api/rewards')
            .map(res => res.json());
    }

    // getRoutines() {
    //     RoutinesPromise = Promise.resolve(this.http.get('http://localhost:3000/api/rewards')
    //         .map(res => res.json()));
    //     return RoutinesPromise;
    // }

    // getRoutine(id: number | string) {
    //     return RoutinesPromise
    //         .then(Routines => Routines.find(routine => routine.id === +id));
    // }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
