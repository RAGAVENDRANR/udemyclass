import { TestBed } from '@angular/core/testing';

import { DatabinderService } from './databinder.service';

describe('DatabinderService', () => {
  let service: DatabinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
