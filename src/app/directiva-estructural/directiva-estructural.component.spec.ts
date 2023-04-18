import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaEstructuralComponent } from './directiva-estructural.component';

describe('DirectivaEstructuralComponent', () => {
  let component: DirectivaEstructuralComponent;
  let fixture: ComponentFixture<DirectivaEstructuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaEstructuralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivaEstructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
