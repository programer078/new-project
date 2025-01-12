import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFieldComponent } from '../input-field/input-field.component';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, InputFieldComponent],
})
export class FormComponent implements OnInit {
  public userForm: FormGroup;
  public submitted: WritableSignal<boolean> = signal(false);

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      personalDetails: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        dateOfBirth: ['', Validators.required],
        gender: ['', Validators.required],
      }),
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      }),
      professionalDetails: this.fb.group({
        education: ['', Validators.required],
        experience: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      }),
    });
  }

  public ngOnInit(): void {}

  public onSubmit(): void {
    this.submitted.set(true);
    if (this.userForm.valid) {
      console.log('Form submitted successfully:', this.userForm.value);
    }
  }

  public resetForm(): void {
    this.userForm.reset();
    this.submitted.set(false);
  }

  public get firstNameControl(): FormControl {
    return this.personalDetails.get('firstName') as FormControl;
  }
  public get lastNameControl(): FormControl {
    return this.personalDetails.get('lastName') as FormControl;
  }
  public get emailControl(): FormControl {
    return this.personalDetails.get('email') as FormControl;
  }
  public get phoneControl(): FormControl {
    return this.personalDetails.get('phone') as FormControl;
  }
  public get dateOfBirthControl(): FormControl {
    return this.personalDetails.get('dateOfBirth') as FormControl;
  }
  public get genderControl(): FormControl {
    return this.personalDetails.get('gender') as FormControl;
  }
  public get streetControl(): FormControl {
    return this.address.get('street') as FormControl;
  }
  public get cityControl(): FormControl {
    return this.address.get('city') as FormControl;
  }
  public get stateControl(): FormControl {
    return this.address.get('state') as FormControl;
  }
  public get pincodeControl(): FormControl {
    return this.address.get('pincode') as FormControl;
  }
  public get educationControl(): FormControl {
    return this.professionalDetails.get('education') as FormControl;
  }
  public get experienceControl(): FormControl {
    return this.professionalDetails.get('experience') as FormControl;
  }

  public get personalDetails(): FormGroup {
    return this.userForm.get('personalDetails') as FormGroup;
  }
  public get address(): FormGroup {
    return this.userForm.get('address') as FormGroup;
  }
  public get professionalDetails(): FormGroup {
    return this.userForm.get('professionalDetails') as FormGroup;
  }
}
