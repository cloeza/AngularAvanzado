import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalComponenteComponent } from './external-componente.component';

describe('ExternalComponenteComponent', () => {
  let component: ExternalComponenteComponent;
  let fixture: ComponentFixture<ExternalComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
