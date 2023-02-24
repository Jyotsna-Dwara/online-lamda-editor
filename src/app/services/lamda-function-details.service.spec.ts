import { TestBed } from '@angular/core/testing';

import { LamdaFunctionDetailsService } from './lamda-function-details.service';

describe('LamdaFunctionDetailsService', () => {
  let service: LamdaFunctionDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LamdaFunctionDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
