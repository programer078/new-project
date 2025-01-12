import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent  implements OnInit {
  @Input() label!: string; 
  @Input() control!: FormControl;
  @Input() type: string = 'text'; 
  @Input() errorMessage: string = 'Invalid input'; 
  @Input() options: string[] = [];

  constructor() { }

  ngOnInit() {}

}