import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardEjemploGuard } from './guard-ejemplo.guard';

describe('guardEjemploGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardEjemploGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
