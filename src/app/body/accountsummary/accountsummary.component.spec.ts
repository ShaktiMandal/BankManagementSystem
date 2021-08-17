import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { CommonApplicationService } from 'src/app/services/common-application-service';
import { HeaderServiceComponent } from 'src/app/services/header.service.component';
import { LogInServiceComponent } from 'src/app/services/logIn.service.component';
import { FormGeneratorComponent } from 'src/app/shared/form/form.component';
import { AppReducer } from 'src/app/store/app-reducer';

import { AccountsummaryComponent } from './accountsummary.component';

describe('AccountsummaryComponent', () => {
  let component: AccountsummaryComponent;
  let fixture: ComponentFixture<AccountsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsummaryComponent ],
      imports: [ RouterTestingModule,  StoreModule.forRoot(AppReducer.accountSummary)],
      providers: [HeaderServiceComponent, LogInServiceComponent, FormGeneratorComponent, CommonApplicationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
