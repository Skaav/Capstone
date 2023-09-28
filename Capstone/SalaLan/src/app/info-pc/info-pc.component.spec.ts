import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPcComponent } from './info-pc.component';

describe('InfoPcComponent', () => {
  let component: InfoPcComponent;
  let fixture: ComponentFixture<InfoPcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoPcComponent]
    });
    fixture = TestBed.createComponent(InfoPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
