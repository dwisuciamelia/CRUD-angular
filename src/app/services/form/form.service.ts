import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private activeStepSubject = new BehaviorSubject<number>(1);
  activeStep$ = this.activeStepSubject.asObservable();

  multiStepForm: FormGroup = this.fb.group({
    personalDetails: this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    }),
    information: this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      role: ['', [Validators.required]],
    }),
  });

  get stepForm(): FormGroup {
    return this.multiStepForm;
  }

  constructor(public fb: FormBuilder, private userService: UserService) {}

  goToNextStep(number: number) {
    this.activeStepSubject.next(number + 1);
  }

  goBackToPreviousStep(number: number) {
    this.activeStepSubject.next(number - 1);
  }

  submit() {
    const data = {
      email: this.multiStepForm.value.personalDetails.email,
      password: this.multiStepForm.value.personalDetails.password,
      firstName: this.multiStepForm.value.information.firstname,
      lastName: this.multiStepForm.value.information.lastname,
      role: this.multiStepForm.value.information.role,
    };
    console.log(data);
    this.userService.create(data).subscribe({
      next: () => {
        this.userService.getAll({});
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
