import { Component, Input } from '@angular/core';
import { User } from '../../../../models/user/user.model';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.css',
})
export class StepOneComponent {
  stepForm!: FormGroup;

  @Input() formGroupName!: string;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.stepForm = this.rootFormGroup.control.get(
      this.formGroupName
    ) as FormGroup;
  }
}
