import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CREATE_FUNCTION_FORM_DETAILS } from '../mock-data';
import { CreateFuntionFormDetails } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class LamdaFunctionDetailsService {
  constructor() {}

  getCreateFunctionFormDetails(): Observable<CreateFuntionFormDetails> {
    return of(CREATE_FUNCTION_FORM_DETAILS);
  }
}
