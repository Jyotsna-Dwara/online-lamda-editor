import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLamdaFunctionComponent } from './create-lamda-function.component';

describe('CreateLamdaFunctionComponent', () => {
  let component: CreateLamdaFunctionComponent;
  let fixture: ComponentFixture<CreateLamdaFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLamdaFunctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLamdaFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
