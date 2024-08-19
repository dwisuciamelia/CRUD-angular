import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../services/form/form.service';
import { User } from '../../models/user/user.model';

@Component({
  selector: 'app-progression-button',
  templateUrl: './progression-button.component.html',
  styleUrl: './progression-button.component.css',
})
export class ProgressionButtonComponent implements OnInit {
  stepForm!: FormGroup;
  activeStep$: number;

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    password: '',
  };

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.stepForm = this.formService.stepForm;
    this.formService.activeStep$.subscribe((step) => (this.activeStep$ = step));
  }

  nextStep() {
    console.log('hello');
    this.formService.goToNextStep(this.activeStep$);
  }
  goBack() {
    this.formService.goBackToPreviousStep(this.activeStep$);
  }

  submit() {
    this.formService.submit();
  }
}
