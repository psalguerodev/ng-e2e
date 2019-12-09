import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, VirtualTimeScheduler } from 'rxjs';

export interface Technology {
  code?: string;
  name: string;
  description: string;
  value?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  private readonly technologyCollectionName = `technologies`;

  constructor(
    private readonly db: AngularFirestore
  ) { }

  getTechnologies(): Observable<Technology[]> {
    return this.db
      .collection<Technology>(this.technologyCollectionName)
      .valueChanges();
  }

  createTechnology(technology: Technology): void {
    technology.code = this.db.createId();
    technology.value = 0;
    this.db
      .collection(this.technologyCollectionName)
      .doc(technology.code)
      .set(technology);
  }

  voteForTechnology(technology: Technology): void {
    technology.value += 1;
    this.db
      .collection(this.technologyCollectionName)
      .doc(technology.code)
      .set(technology);
  }

}
