import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import ResetPasswordModel from 'src/app/model/reset-password-model';
import { GetErrorMessage } from 'src/app/shared/fieldValidator';
import { FormGeneratorComponent } from 'src/app/shared/form/form.component';
import { ResetPasswordStartAction } from 'src/app/store/action/reset-password-action';
import { AppState } from 'src/app/store/app-reducer';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit, OnDestroy {


  serverError: string = "";
  invalidFieldErrorMsg: string = "";
  isFormSubmitted: boolean = false;
  resetPasswordForm: FormGroup = new FormGroup({});
  ngUnsubscribe: Subject<void> = new Subject<void>();
  
  constructor(private formGroup: FormGeneratorComponent, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formGroup.CreateFormGroup({fieldsName: ['userEmail', 'userPassword', 'confPassword']});
    this.isFormSubmitted = false;
    this.store.select("resetPassword").pipe(takeUntil(this.ngUnsubscribe)).subscribe(details => {

      if(details !== null && details !== undefined)
      {
        if(details.resetPasswordError)
        {
          this.serverError = details.resetPasswordError;
        }
  
        if(details.isPasswordSuccess)
        {
          this.resetPasswordForm.resetAll();
        }
      }   
    });
  }

  ngOnDestroy():void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  OnResetPassword = ():void =>
  {   
    if(this.resetPasswordForm.valid)
    {
        var passwordDetails: ResetPasswordModel | null = this.GetPasswordDetails();
        if(passwordDetails)
        {
          this.store.dispatch(new ResetPasswordStartAction(passwordDetails));
        }
        this.isFormSubmitted = true;
    }
    else
    {
      this.serverError = "Please enter valid details";
    }
  }

  GetPasswordDetails(): ResetPasswordModel | null {
    if(this.resetPasswordForm.value)
    {
      return {
        userEmail : this.resetPasswordForm.value.userEmail,
        password : this.resetPasswordForm.value.userPassword,
        confirmPassword: this.resetPasswordForm.value.confPassword,
        isPasswordSuccess: false,
        resetPasswordError: ""
      }
    }
    else
    {
      return null;
    }
  }

  OnMouseEnter = ():void =>{
    console.log("formConteol", this.resetPasswordForm);
  }

  IsAValidField(fieldControlName: string)
  {    
    var control = this.resetPasswordForm.get(fieldControlName);   
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
    this.invalidFieldErrorMsg = this.IsAValidField(field) ? GetErrorMessage(field) : "";
    return({
      'has-error' : this.IsAValidField(field)
    });
  }
}
