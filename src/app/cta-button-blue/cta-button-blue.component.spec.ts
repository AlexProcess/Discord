import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaButtonBlueComponent } from './cta-button-blue.component';

describe('CtaButtonBlueComponent', () => {
  let component: CtaButtonBlueComponent;
  let fixture: ComponentFixture<CtaButtonBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaButtonBlueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaButtonBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
