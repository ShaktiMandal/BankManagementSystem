import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { CommonApplicationService } from '../services/common-application-service';
import { HeaderServiceComponent } from '../services/header.service.component';
import { LogInServiceComponent } from '../services/logIn.service.component';
import { FormGeneratorComponent } from '../shared/form/form.component';

import { BodyComponent } from './body.component';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyComponent ],
      imports: [ RouterTestingModule,  StoreModule.forRoot({})],
      providers: [HeaderServiceComponent, LogInServiceComponent, FormGeneratorComponent, CommonApplicationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
