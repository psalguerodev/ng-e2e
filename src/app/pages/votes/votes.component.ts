import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { TechnologiesService } from 'src/app/services/technologies.service';
import { Technology } from '../../services/technologies.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit, OnDestroy {

  technologies: Technology[] = [];
  techSubscription: Subscription;
  isLoading: boolean;

  constructor(private readonly techService: TechnologiesService) {}

  ngOnInit() {
    this.isLoading = true;
    this.techSubscription = this.techService.getTechnologies()
      .subscribe((techs: Technology[]) => this.handlerTechnologies(techs));
  }

  ngOnDestroy() {
    if (this.techSubscription) {
      this.techSubscription.unsubscribe();
    }
  }

  private handlerTechnologies(techs: Technology[]): void {
    this.isLoading = false;
    this.technologies = [...techs].sort((a, b) => (a.value > b.value) ? -1 : 1);
  }

  voteTech(tech: Technology) {
    this.techService.voteForTechnology(tech);
  }

}
