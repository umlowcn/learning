import { Component, OnInit } from '@angular/core';
import { RewardService } from '../../services/reward.service';
import { IReward } from '../../interfaces/reward';
import { RoutineComponent } from './routine.component';

@Component({
    moduleId: module.id,
    selector: 'routine',
    templateUrl: 'routine.component.html'
})

export class MorningComponent extends RoutineComponent {
    constructor ( rewardService: RewardService) {
        super(rewardService);
        this.routine = 'morning';
    }

    ngOnInit() { 
        super.getReward(this.routine);
    }
}
