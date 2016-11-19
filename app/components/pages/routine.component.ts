import { Component, OnInit } from '@angular/core';
import { RewardService } from '../../services/reward.service';
import { IReward } from '../../interfaces/reward';

@Component({
    moduleId: module.id,
    selector: 'routine',
    templateUrl: 'routine.component.html'
})
export class RoutineComponent {
    routine: string;
    rewards: IReward[];
    reward: IReward;


    constructor(private rewardService: RewardService) {
        this.rewardService.loadAll();
    }

    getRewards() {
        return this.rewardService.getRewards()
            .subscribe((data: IReward[]) => this.rewards = data);
    }

    getReward(type: string) {
        return this.rewardService.getReward(type);
            //.subscribe(reward => this.reward = reward);
    }
}
