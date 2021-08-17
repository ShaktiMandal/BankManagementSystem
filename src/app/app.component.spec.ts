import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AccountsummaryComponent } from './body/accountsummary/accountsummary.component';
import { ApplyloanComponent } from './body/applyloan/applyloan.component';
import { BodyComponent } from './body/body.component';
import { ResetpasswordComponent } from './body/resetpassword/resetpassword.component';
import { SigninComponent } from './body/signin/signin.component';
import { SignupComponent } from './body/signup/signup.component';
import { UpdatecustomerComponent } from './body/updatecustomer/updatecustomer.component';
import { ErrorComponentTemplateComponent } from './errortemplate/error-component-template/error-component-template.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CommonApplicationService } from './services/common-application-service';
import { HeaderServiceComponent } from './services/header.service.component';
import { LogInServiceComponent } from './services/logIn.service.component';
import { FormGeneratorComponent } from './shared/form/form.component';
import { AppReducer } from './store/app-reducer';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent       
      ],
      imports: [ RouterTestingModule,  StoreModule.forRoot({})],
      providers: [HeaderServiceComponent, LogInServiceComponent, FormGeneratorComponent, CommonApplicationService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bank-management-system'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bank-management-system');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    if(compiled.querySelector('.content span'))
    {
      expect(compiled.querySelector('.content span').textContent).toContain('bank-management-system app is running!');
    }
  });
});
