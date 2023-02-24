import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExecutionDialogComponent } from './test-execution-dialog.component';

describe('TestExecutionDialogComponent', () => {
  let component: TestExecutionDialogComponent;
  let fixture: ComponentFixture<TestExecutionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestExecutionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestExecutionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
