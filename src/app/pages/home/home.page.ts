import { Component, inject } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { StopwatchComponent } from 'src/app/core/shared/components/stopwatch/stopwatch.component';
import { FormComponent } from "../../core/shared/components/form/form.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StopwatchComponent, IonContent, FormComponent],
  templateUrl: './home.page.html',
  styleUrls:["./home.page.scss"]
})
export class HomePage {
  
  constructor() {}
}