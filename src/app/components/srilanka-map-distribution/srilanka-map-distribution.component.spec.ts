import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrilankaMapDistributionComponent } from './srilanka-map-distribution.component';

describe('SrilankaMapDistributionComponent', () => {
  let component: SrilankaMapDistributionComponent;
  let fixture: ComponentFixture<SrilankaMapDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrilankaMapDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrilankaMapDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
