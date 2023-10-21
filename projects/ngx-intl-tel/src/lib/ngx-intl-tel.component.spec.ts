import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIntlTelComponent } from './ngx-intl-tel.component';

describe('NgxIntlTelComponent', () => {
  let component: NgxIntlTelComponent;
  let fixture: ComponentFixture<NgxIntlTelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxIntlTelComponent]
    });
    fixture = TestBed.createComponent(NgxIntlTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
