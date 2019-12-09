import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { VotesComponent } from './pages/votes/votes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChartComponent } from './components/chart/chart.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    GraphicsComponent,
    VotesComponent,
    NavbarComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
