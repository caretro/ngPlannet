import { TestBed } from '@angular/core/testing';

import { ConfirmUpdateGuard } from './confirm-update.guard';

describe('ConfirmUpdateGuard', () => {
  let guard: ConfirmUpdateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfirmUpdateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
