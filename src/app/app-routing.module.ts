import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { VotesComponent } from './pages/votes/votes.component';


const routes: Routes = [
  { path: 'charts', component: GraphicsComponent },
  { path: 'votes', component: VotesComponent },
  { path: '', redirectTo: 'charts', pathMatch: 'full' },
  { path: '**', redirectTo: 'charts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
