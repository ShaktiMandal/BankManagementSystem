import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { CommonApplicationService } from 'src/app/services/common-application-service';
import { HeaderServiceComponent } from 'src/app/services/header.service.component';
import { LogInServiceComponent } from 'src/app/services/logIn.service.component';
import { FormGeneratorComponent } from 'src/app/shared/form/form.component';
import { AppReducer } from 'src/app/store/app-reducer';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports: [ RouterTestingModule,  StoreModule.forRoot(AppReducer.signIn)],
      providers: [HeaderServiceComponent, LogInServiceComponent, FormGeneratorComponent, CommonApplicationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load log in form', () => {
    var formElelement = fixture.nativeElement;
    if(formElelement !== null && formElelement !== undefined)
    {
        var element = formElelement.querySelector('h2').textContent;
        expect(element).toEqual("Log In");
    }
  });

  it('should log in form have email and password label ', () => {
    var formElelement = fixture.nativeElement;
    if(formElelement !== null && formElelement !== undefined)
    {
        var element = formElelement.querySelectorAll('span');
        expect(element.length).toEqual(2);
        expect(element[0].textContent).toEqual("Email");
        expect(element[1].textContent).toEqual("Password");
    }
  });

  it('should log in form have email and password input fields', () => {
    var formElelement = fixture.debugElement;
    if(formElelement !== null && formElelement !== undefined)
    {
        var emailInputElement = formElelement.query((element)=>{
          return element.nativeElement.id === "userEmail"
        });

        expect(emailInputElement.attributes.type).toEqual("email");

        var passwordInputElement = formElelement.query((element)=>{
          return element.nativeElement.id === "userPassword"
        });

        expect(passwordInputElement.attributes.type).toEqual("password");
    }
  });

  it('should log in form have reset here and create account options', () => {
    var formElelement = fixture.nativeElement;
    if(formElelement !== null && formElelement !== undefined)
    {
        var element = formElelement.querySelectorAll('a');
        expect(element.length).toEqual(2);
        expect(element[0].textContent).toEqual("Reset Here");
        expect(element[1].textContent).toEqual("Create Account");
    }  
  });

  it('should log in form have sign in button', () => {
    var formElelement = fixture.debugElement;
    if(formElelement !== null && formElelement !== undefined)
    {
        var submitBtnElement = formElelement.query((element)=>{
          return element.nativeElement.id === "userSubmitBtn"
        });

        expect(submitBtnElement.attributes.type).toEqual("submit");
        expect(submitBtnElement.attributes.value).toEqual("Sign in");
     
    }
  });

  it('should log in form have error when submitting without any data', () => {
    var formElelement = fixture.debugElement;
    if(formElelement !== null && formElelement !== undefined)
    {
        var submitBtnElement = formElelement.query((element)=>{
          return element.nativeElement.id === "userSubmitBtn"
        });

        spyOn(component, 'OnSignIn').and.callThrough();
        component.OnSignIn();
        expect(component.OnSignIn).toHaveBeenCalled();
        expect(component.serverError).toEqual("Please enter valid details");
    }
  });

  it('Invalid sign in form', () => {
    var formElelement = fixture.debugElement;
    if(formElelement !== null && formElelement !== undefined)
    {
        var submitBtnElement = formElelement.query((element)=>{
          return element.nativeElement.id === "userSubmitBtn"
        });

        component.OnSignIn();
        expect(component.signInForm.valid).toEqual(false);
    }
  });

  it('valid sign in form', () => {
    var formElelement = fixture.debugElement;
    if(formElelement !== null && formElelement !== undefined)
    {
        var submitBtnElement = formElelement.query((element)=>{
          return element.nativeElement.id === "userSubmitBtn"
        });

        component.signInForm.get('userEmail')?.setValue('test.test@gmail.com');
        component.signInForm.get('userPassword')?.setValue('Password@1');
        component.signInForm.markAllAsTouched();
        component.signInForm.updateValueAndValidity();
        component.OnSignIn();
        expect(component.signInForm.valid).toEqual(true);
    }
  });
  it('valid sign in form', () => {
    var formElelement = fixture.debugElement;
    if(formElelement !== null && formElelement !== undefined)
    {
        var submitBtnElement = formElelement.query((element)=>{
          return element.nativeElement.id === "userSubmitBtn"
        });

        component.signInForm.get('userEmail')?.setValue('test.test@gmail.com');
        component.signInForm.get('userPassword')?.setValue('Password@1');
        component.signInForm.markAllAsTouched();
        component.signInForm.updateValueAndValidity();
        component.OnSignIn();
        expect(component.signInForm.valid).toEqual(true);
    }
  });
});
