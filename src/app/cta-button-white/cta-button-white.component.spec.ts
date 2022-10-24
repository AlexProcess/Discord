import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaButtonWhiteComponent } from './cta-button-white.component';

describe('CtaButtonWhiteComponent', () => {
  let component: CtaButtonWhiteComponent;
  let fixture: ComponentFixture<CtaButtonWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaButtonWhiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaButtonWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
