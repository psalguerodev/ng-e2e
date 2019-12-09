import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TechnologiesService, Technology } from '../../services/technologies.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnDestroy, OnInit {

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Technology';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  colorScheme = 'nightLights';

  technologies: Technology[] = [];
  techSubscription: Subscription;

  isLoading: boolean

  constructor(private readonly techService: TechnologiesService) {}

  ngOnInit() {
    this.isLoading = true;
    this.techSubscription = this.techService.getTechnologies()
      .subscribe((techs: Technology[]) => this.handlerTechnologiesResponse(techs));
  }

  loadTechcnologies() {
    this.techService.createTechnology({ name: 'Angular', description: 'Robust framework' });
    this.techService.createTechnology({ name: 'Vue JS', description: 'Robust framework' });
    this.techService.createTechnology({ name: 'React JS', description: 'Robust framework' });
    this.techService.createTechnology({ name: 'Javascript Vainilla', description: 'Simple Javascript' });
  }

  handlerTechnologiesResponse(techs: Technology[]) {
    this.isLoading = false;
    this.technologies = [...techs];
  }

  ngOnDestroy() {
    if (this.techSubscription) {
      this.techSubscription.unsubscribe();
    }
  }

  onSelect(event) {
    console.log(event);
  }
}
