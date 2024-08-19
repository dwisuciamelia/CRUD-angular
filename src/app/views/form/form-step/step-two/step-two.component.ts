import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.css',
})
export class StepTwoComponent {
  stepForm!: FormGroup;

  @Input() formGroupName!: string;
  roleData = [
    { name: 'Admin', desc: 'admin' },
    { name: 'User', desc: 'user' },
  ];

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.stepForm = this.rootFormGroup.control.get(
      this.formGroupName
    ) as FormGroup;
  }
}
