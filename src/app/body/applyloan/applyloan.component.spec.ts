import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { CommonApplicationService } from 'src/app/services/common-application-service';
import { HeaderServiceComponent } from 'src/app/services/header.service.component';
import { LogInServiceComponent } from 'src/app/services/logIn.service.component';
import { FormGeneratorComponent } from 'src/app/shared/form/form.component';
import { AppReducer } from 'src/app/store/app-reducer';

import { ApplyloanComponent } from './applyloan.component';

describe('ApplyloanComponent', () => {
  let component: ApplyloanComponent;
  let fixture: ComponentFixture<ApplyloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyloanComponent ],
      imports: [ RouterTestingModule,  StoreModule.forRoot(AppReducer.loan)],
      providers: [HeaderServiceComponent, LogInServiceComponent, FormGeneratorComponent, CommonApplicationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
