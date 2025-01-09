import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonList, IonSegment, IonSegmentButton, IonLabel, IonButton, IonCard, IonCardContent, IonInput, IonItem, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonList,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonButton,
    IonCard,
    IonCardContent,
    IonInput,
    IonItem,
    IonContent
  ]
})
export class StopwatchComponent implements OnInit, OnDestroy {
  selectedSegment = 'stopwatch';
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  timerMinutes = 0;
  timerSeconds = 0;
  timerMilliseconds = 0;
  inputMinutes = '';
  isRunning = false;
  private stopwatchInterval: any;
  private timerInterval: any;

  dialNumbers = Array.from({ length: 12 }, (_, i) => i);

  constructor() { }

  ngOnInit() {}

  getMinuteRotation(): number {
    return (this.minutes * 6) + (this.seconds * 0.1);
  }

  getSecondRotation(): number {
    return (this.seconds * 6) + (this.milliseconds * 0.006);
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

  toggleTimerOrStopwatch(isStopwatch: boolean) {
    this.isRunning = !this.isRunning;
    if (this.isRunning) {
      if (isStopwatch) {
        this.stopwatchInterval = setInterval(() => {
          this.milliseconds += 10;
          if (this.milliseconds >= 1000) {
            this.milliseconds = 0;
            this.seconds++;
            if (this.seconds >= 60) {
              this.seconds = 0;
              this.minutes++;
            }
          }
        }, 10);
      } else {
        if (this.inputMinutes) {
          this.timerMinutes = parseInt(this.inputMinutes, 10);
          this.timerSeconds = 0;
          this.timerMilliseconds = 0;
          this.inputMinutes = '';
        }
        if (this.timerMinutes > 0 || this.timerSeconds > 0 || this.timerMilliseconds > 0) {
          this.timerInterval = setInterval(() => {
            if (this.timerMilliseconds > 0) {
              this.timerMilliseconds -= 10;
            } else {
              this.timerMilliseconds = 990;
              if (this.timerSeconds > 0) {
                this.timerSeconds--;
              } else if (this.timerMinutes > 0) {
                this.timerMinutes--;
                this.timerSeconds = 59;
              } else {
                this.resetTimer();
              }
            }
          }, 10);
        }
      }
    } else {
      isStopwatch ? clearInterval(this.stopwatchInterval) : clearInterval(this.timerInterval);
    }
  }

  resetTimer() {
    this.timerMinutes = this.timerSeconds = this.timerMilliseconds = 0;
    clearInterval(this.timerInterval);
    this.timerInterval = null;
    this.isRunning = false;
    this.inputMinutes = '';
  }

  resetStopwatch() {
    this.minutes = this.seconds = this.milliseconds = 0;
    clearInterval(this.stopwatchInterval);
    this.isRunning = false;
  }

  formatNumber(num: number, digits: number = 2): string {
    return num.toString().padStart(digits, '0');
  }

  getTimerMinuteRotation(): number {
    return (this.timerMinutes * 6) + (this.timerSeconds * 0.1);
  }

  getTimerSecondRotation(): number {
    return (this.timerSeconds * 6) + (this.timerMilliseconds * 0.006);
  }

  ngOnDestroy() {
    clearInterval(this.stopwatchInterval);
    clearInterval(this.timerInterval);
  }
}
