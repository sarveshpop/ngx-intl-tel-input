import { TestBed } from '@angular/core/testing';

import { NgxIntlTelService } from './ngx-intl-tel.service';

describe('NgxIntlTelService', () => {
  let service: NgxIntlTelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIntlTelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
