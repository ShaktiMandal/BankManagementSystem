import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponentTemplateComponent } from './error-component-template.component';

describe('ErrorComponentTemplateComponent', () => {
  let component: ErrorComponentTemplateComponent;
  let fixture: ComponentFixture<ErrorComponentTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorComponentTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
