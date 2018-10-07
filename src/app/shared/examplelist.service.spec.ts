import { TestBed } from '@angular/core/testing';

import { ExamplelistService } from './examplelist.service';

describe('ExamplelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamplelistService = TestBed.get(ExamplelistService);
    expect(service).toBeTruthy();
  });
});
