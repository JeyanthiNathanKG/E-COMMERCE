import { TestBed } from '@angular/core/testing';

import { AnnouncentServiceService } from './announcent-service.service';

describe('AnnouncentServiceService', () => {
  let service: AnnouncentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnouncentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
