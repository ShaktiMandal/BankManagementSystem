import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { CommonApplicationService } from 'src/app/services/common-application-service';
import { HeaderServiceComponent } from 'src/app/services/header.service.component';
import { LogInServiceComponent } from 'src/app/services/logIn.service.component';
import { FormGeneratorComponent } from 'src/app/shared/form/form.component';
import { AppReducer } from 'src/app/store/app-reducer';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [ RouterTestingModule,  StoreModule.forRoot(AppReducer.signUp)],
      providers: [HeaderServiceComponent, LogInServiceComponent, FormGeneratorComponent, CommonApplicationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
