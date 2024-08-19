import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form/form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  stepForm!: FormGroup;
  activeStep$: number;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.stepForm = this.formService.stepForm;

    this.formService.activeStep$.subscribe((step) => (this.activeStep$ = step));
  }

  confirmAndSubmitForm() {
    // this.formService.submit();
  }
}
