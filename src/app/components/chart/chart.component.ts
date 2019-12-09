import { Component, OnDestroy, OnInit } from '@angular/core';
import { TechnologiesService, Technology } from '../../services/technologies.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  providers: [AngularFirestore, TechnologiesService]
})
export class ChartComponent implements OnDestroy, OnInit {

  // options
  showXAxis = true
  showYAxis = true
  gradient = true
  showLegend = false
  showXAxisLabel = true
  xAxisLabel = 'Technology'
  showYAxisLabel = true
  yAxisLabel = 'Population'
  colorScheme = 'nightLights'

  technologies: Technology[] = []
  techSubscription: Subscription

  constructor(private readonly techService: TechnologiesService) {}

  ngOnInit() {
    this.techSubscription = this.techService.getTechnologies()
      .subscribe((techs: Technology[]) => this.handlerTechnologiesResponse(techs))
  }

  loadTechcnologies() {
    this.techService.createTechnology({ name: 'Angular', description: 'Robust framework' })
    this.techService.createTechnology({ name: 'Vue JS', description: 'Robust framework' })
    this.techService.createTechnology({ name: 'React JS', description: 'Robust framework' })
    this.techService.createTechnology({ name: 'Javascript Vainilla', description: 'Simple Javascript' })
  }

  handlerTechnologiesResponse(techs: Technology[]) {
    this.technologies = [...techs]
  }

  ngOnDestroy() {
    if (this.techSubscription)
      this.techSubscription.unsubscribe()
  }

  onSelect(event) {
    console.log(event)
  }
}
