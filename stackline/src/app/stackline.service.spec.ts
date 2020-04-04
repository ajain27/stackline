import { TestBed } from '@angular/core/testing';

import { StacklineService } from './stackline.service';

describe('StacklineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StacklineService = TestBed.get(StacklineService);
    expect(service).toBeTruthy();
  });
});
