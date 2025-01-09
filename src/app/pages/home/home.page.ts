import { Component, inject } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { StopwatchComponent } from 'src/app/core/shared/components/stopwatch/stopwatch.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ StopwatchComponent,IonContent],
  templateUrl: './home.page.html',
  styleUrls:["./home.page.scss"]
})
export class HomePage {
  
  constructor() {}
}