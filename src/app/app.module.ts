import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './body/signin/signin.component';
import { SignupComponent } from './body/signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing-module';
import { ResetpasswordComponent } from './body/resetpassword/resetpassword.component';
import { HeaderServiceComponent } from './services/header.service.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponentTemplateComponent } from './errortemplate/error-component-template/error-component-template.component';
import { FormGeneratorComponent } from './shared/form/form.component';
import { AccountsummaryComponent } from './body/accountsummary/accountsummary.component';
import { ApplyloanComponent } from './body/applyloan/applyloan.component';
import { LogInServiceComponent } from './services/logIn.service.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SignInEffects } from './store/effects/sign-in-effects';
import { AppReducer } from './store/app-reducer';
import { SignUpEffects } from './store/effects/sign-up-effect';
import { AccountSummaryEffect } from './store/effects/account-summary-effect';
import { LoanEffect } from './store/effects/loan-effects';
import { CommonApplicationService } from './services/common-application-service';
import { UpdateCustomerEffect } from './store/effects/update-customer-effects';
import { ResetPasswordEffect } from './store/effects/reset-password-effect';
import { LogOutEffect } from './store/effects/log-out-effect';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    NotfoundComponent,
    ResetpasswordComponent,
    ErrorComponentTemplateComponent,
    AccountsummaryComponent,
    ApplyloanComponent   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot(
      [
        SignInEffects, 
        SignUpEffects, 
        AccountSummaryEffect, 
        LoanEffect, 
        UpdateCustomerEffect, 
        ResetPasswordEffect,
        LogOutEffect
      ]
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [HeaderServiceComponent, LogInServiceComponent, FormGeneratorComponent, CommonApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{ 
 
  constructor(private headerService: HeaderServiceComponent){}
  ngOnInit():void
  {
    
  }
}
