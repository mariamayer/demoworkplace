import { TestBed, inject } from '@angular/core/testing';

import { MapserverService } from './mapserver.service';

describe('MapserverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapserverService]
    });
  });

  it('should be created', inject([MapserverService], (service: MapserverService) => {
    expect(service).toBeTruthy();
  }));
});
