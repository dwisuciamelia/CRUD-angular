import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressionButtonComponent } from './progression-button.component';

describe('ProgressionButtonComponent', () => {
  let component: ProgressionButtonComponent;
  let fixture: ComponentFixture<ProgressionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressionButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
