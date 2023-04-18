import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaAtributoComponent } from './directiva-atributo.component';

describe('DirectivaAtributoComponent', () => {
  let component: DirectivaAtributoComponent;
  let fixture: ComponentFixture<DirectivaAtributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaAtributoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivaAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
