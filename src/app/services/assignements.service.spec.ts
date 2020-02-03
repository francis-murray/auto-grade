import { TestBed } from '@angular/core/testing';

import { AssignementsService } from './assignements.service';

describe('AssignementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignementsService = TestBed.get(AssignementsService);
    expect(service).toBeTruthy();
  });
});
