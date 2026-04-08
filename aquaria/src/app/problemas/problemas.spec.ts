import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problemas } from './problemas';

describe('Problemas', () => {
  let component: Problemas;
  let fixture: ComponentFixture<Problemas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problemas],
    }).compileComponents();

    fixture = TestBed.createComponent(Problemas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
