import { TestBed } from '@angular/core/testing';

import { FrontEndService } from './front-end.service';

describe('FrontEndService', () => {
  let service: FrontEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontEndService);
  });

  it('this should work, I hope', () => {
    expect(service).toBeTruthy();
  });
});