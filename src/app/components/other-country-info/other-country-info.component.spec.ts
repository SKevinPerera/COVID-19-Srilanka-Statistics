import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCountryInfoComponent } from './other-country-info.component';

describe('OtherCountryInfoComponent', () => {
  let component: OtherCountryInfoComponent;
  let fixture: ComponentFixture<OtherCountryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherCountryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCountryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
