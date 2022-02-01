import { TestBed } from '@angular/core/testing';

import { MeSvgeditService } from './me-svgedit.service';

describe('MeSvgeditService', () => {
  let service: MeSvgeditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeSvgeditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
