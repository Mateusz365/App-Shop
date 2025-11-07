import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onas } from './onas';

describe('Onas', () => {
  let component: Onas;
  let fixture: ComponentFixture<Onas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Onas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
