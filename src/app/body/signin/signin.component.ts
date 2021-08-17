import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import 'src/app/shared/form/FormExtension.component';
import { FormGeneratorComponent } from 'src/app/shared/form/form.component';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { LogInServiceComponent } from 'src/app/services/logIn.service.component';
import {Router} from '@angular/router';
import SignInModel from 'src/app/model/sign-in-model';
import { Store } from '@ngrx/store';
import { GetSignInAction } from 'src/app/store/action/sign-in-action';
import { AppState } from 'src/app/store/app-reducer';
import { SignInService } from 'src/app/services/sign-in-service';
import { CommonApplicationService } from 'src/app/services/common-application-service';
import { take, takeUntil } from 'rxjs/operators';
import { GetErrorMessage } from 'src/app/shared/fieldValidator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {
  
  ngUnsubscribe: Subject<void> = new Subject<void>();
  serverError: string = "";
  invalidFieldErrorMsg: string = "";
  isFormSubmitted: boolean = false;
  signInEvent : Observable<Event> = new Observable
  signInForm: FormGroup = new FormGroup({});
  
  signInData: SignInModel = {
    userEmail:"", 
    passWord:"", 
    isUserLoggedIn: false, 
    signInError: "",
    customerId: "",
    authenticationToken: ""
  };
  
  
  constructor(private formGroup: FormGeneratorComponent, 
    private store : Store<AppState>) { }

  ngOnInit(): void {
    this.signInForm = this.formGroup.CreateFormGroup({fieldsName: ['userEmail', 'userPassword']}); 
   
   this.store.select("signIn").pipe(takeUntil(this.ngUnsubscribe)).subscribe(signInState => {

    if(signInState !== null && signInState !== undefined)
    {
      if(signInState.signInError.length)
      {
        this.serverError = signInState.signInError; 
      }

      if(signInState.isUserLoggedIn)
      {
        this.signInForm.resetFields(['userEmail','userPassword']); 
        this.isFormSubmitted = signInState.isUserLoggedIn;                  
      }
    }
   });
  }

ngOnDestroy(): void{
  this.ngUnsubscribe.next();
  this.ngUnsubscribe.complete();
}
 
  OnSignIn = ():void =>{
    this.isFormSubmitted = true;
    if(this.signInForm.valid)
    {   
      this.signInData =  this.GetSignInData();    
      this.store.dispatch(new GetSignInAction(this.signInData));     
      this.isFormSubmitted = false;
    } 
    else
    {
      this.serverError = "Please enter valid details";
    }
  }

  IsAValidField(fieldControlName: string)
  {    
    var control = this.signInForm.get(fieldControlName);   
    if(control !== undefined && control !== null)
    {
      if(control.touched === false && this.isFormSubmitted === true)
      {        
          return true;
      }

      if(control.touched)
      {
        var isValidated = !control.valid && control.touched;         
        return isValidated;
      }
    }
    return false;
  }

  DisplayErrorClass(field: string)
  {
    this.invalidFieldErrorMsg = this.IsAValidField(field) ?  GetErrorMessage(field)  : "";
    return({
      'has-error' : this.IsAValidField(field)
    });
  }

  ValidateErrors(form: FormGroup) {
      Object.keys(form).forEach(element => {
          let field = form.get(element);
          if(field instanceof FormControl)
          {
            field.markAsTouched({onlySelf: true});
          }
          else if(field instanceof FormGroup)
          {
            this.ValidateErrors(field);
          }
      });
  }

  GetSignInData(): SignInModel {
    this.signInData = {
      userEmail: "", 
      passWord: "", 
      isUserLoggedIn: false, 
      customerId: "",
      authenticationToken: "",
      signInError: ""
    };

    if(this.signInForm.value)
    {
      this.signInData.passWord = this.signInForm.value.userPassword;
      this.signInData.userEmail = this.signInForm.value.userEmail
    }
    return this.signInData;
 } 
}

