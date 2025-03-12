import { TestBed } from '@angular/core/testing';

import { HistorietaService } from './historieta.service';

describe('HistorietaService', () => {
  let service: HistorietaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorietaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
