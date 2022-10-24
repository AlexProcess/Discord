import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaButtonBlackComponent } from './cta-button-black.component';

describe('CtaButtonBlackComponent', () => {
  let component: CtaButtonBlackComponent;
  let fixture: ComponentFixture<CtaButtonBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaButtonBlackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaButtonBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
