import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import SignInModel from 'src/app/model/sign-in-model';
import CustomerDetailsModel from 'src/app/model/sign-up-model';
import { CommonApplicationService } from 'src/app/services/common-application-service';
import { FieldName } from 'src/app/shared/fieldName';
import { GetErrorMessage } from 'src/app/shared/fieldValidator';
import { FormGeneratorComponent } from 'src/app/shared/form/form.component';
import { SignUpStartAction } from 'src/app/store/action/sign-up-action';
import { GetCustomerStartAction, UpdateCustomerStartAction } from 'src/app/store/action/update-customer-action';
import { AppState } from 'src/app/store/app-reducer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  invalidFieldErrorMsg:string = "";
  signUpFormGroup: FormGroup  = new FormGroup({});
  isFormSubmitted: boolean = false;
  isUpdateCustomer: boolean = false;
  serverError: string = "";   
  ngUnsubscribe: Subject<void> = new Subject<void>();
  fieldName = new FieldName();

  userDetails : SignInModel = {
    userEmail: "",
    passWord: "",
    isUserLoggedIn: false,
    customerId: "",
    authenticationToken: "",
    signInError: ""
  }

  customerDetails: any

  constructor(private formGroup: FormGeneratorComponent, private store: Store<AppState>, private commonService: CommonApplicationService) { 
    this.userDetails = commonService.getLoggedInUserDetails();
    if(this.userDetails.customerId.length > 0)
    {
      this.isUpdateCustomer = true;
    }
    else
    {
      this.isUpdateCustomer = false;
    }
  }

  ngOnInit(): void {

    if(this.isUpdateCustomer) 
    {
      this.fieldName.singUpFieldsName.splice(this.fieldName.singUpFieldsName.indexOf("userPassword"), 1);
      this.signUpFormGroup = this.formGroup.CreateFormGroup({fieldsName: this.fieldName.singUpFieldsName});
      var customerDetails = this.GetRegisterDetails();
      if(customerDetails!== null)
      {
        this.store.dispatch(new GetCustomerStartAction(customerDetails));
        this.store.select("customerUpdate").subscribe (customerData => {
          this.customerDetails = customerData;
          this.setCustomerDetails(customerData)
        })
      }
    } 
    else
    {
      this.signUpFormGroup = this.formGroup.CreateFormGroup({fieldsName: this.fieldName.singUpFieldsName});
      this.store.select("signUp").pipe(takeUntil(this.ngUnsubscribe)).subscribe(customerDetails => {

        if(customerDetails !== null && customerDetails !== undefined)
        {
          if(customerDetails.updateCustomerError.length)
          {
            this.serverError = customerDetails.updateCustomerError;
          }
          
          if(customerDetails.id)
          {
            this.signUpFormGroup.resetAll();          
          }
        }
      })     
    }  
   
    this.SetDovumentTypeValidator();
    this.SetAccountTypeBasedOnAmount();
    this.CreatePaginationForm();
    
  }

  ngOnDestroy():void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  setCustomerDetails(customerData: CustomerDetailsModel) {
    if(this.signUpFormGroup)
    {
        this.signUpFormGroup.patchValue({
          ...customerData
        });

        this.signUpFormGroup.markAllAsTouched();
        this.signUpFormGroup.markAsPristine();
    }
  }

  CreatePaginationForm() {
    var formContainerElement = document.getElementById("form-container-id"); 
    var firstNextElement = document.getElementById("firstNextElement");
    var secondNextElement = document.getElementById("secondNextElement");
    var thirdNextElement = document.getElementById("thirdNextElement");
    var fourthNextElement = document.getElementById("fourthNextElement");
    var firstPrevElement = document.getElementById("firstPrevElement");
    var secondPrevElement = document.getElementById("secondPrevElement");
    var thirdPrevElement = document.getElementById("thirdPrevElement");

    firstNextElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-100%";
      });
      secondNextElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-200%";
      });
      thirdNextElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-300%";
      });
      fourthNextElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-400%";
      });
      firstPrevElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "0%";
      });
      secondPrevElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-100%";
      });
      thirdPrevElement?.addEventListener("click", () => {   
        if(formContainerElement) 
          formContainerElement.style.marginLeft = "-200%";
      });
  }

  SetDovumentTypeValidator() {
    if(this.signUpFormGroup)
    {
      var documentTypeSelection = this.signUpFormGroup.get("userDocProof");
      if(documentTypeSelection)
      {
        documentTypeSelection.valueChanges.subscribe( selectedDocType => this.OnValueChange(selectedDocType))
      }
    }
  }

  OnAccountTypeChange = (accountType: string):void =>
  {
      if(accountType !== null)
      {
        var depositAmountControl = this.signUpFormGroup.get("userDepositAmount"); 
        if(depositAmountControl !== null)
        {          
          accountType === "Saving" ? depositAmountControl.setValue("5000") : depositAmountControl.setValue("0");
          depositAmountControl.updateValueAndValidity();
        }
      }
  }

  SetAccountTypeBasedOnAmount()
  {
    if(this.signUpFormGroup)
    {
      var accountTypeControl = this.signUpFormGroup.get("userAccountType");
      if(accountTypeControl)
      {
        accountTypeControl.valueChanges.subscribe( accountType => this.OnAccountTypeChange(accountType))
      }
    }
  }

  OnValueChange = (selectedDocType: string): void =>{
    if(selectedDocType)
    {
       var documentNoControl = this.signUpFormGroup.get("userDocNo");    
       if(documentNoControl !== null)
       {
        selectedDocType === "PAN Card" ? 
         documentNoControl.setValidators([Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]) :
         documentNoControl.setValidators([Validators.required, Validators.pattern(/^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$/)]);
         documentNoControl.updateValueAndValidity();
       }
    }
  }

  OnRegister() : void {
    if(this.signUpFormGroup.valid)
    {
      if(this.isUpdateCustomer)
      {
        this.updateCustomerDetails();
      }
      else
      {
        this.createCustomerDetails();
      }     
      this.isFormSubmitted = true;
    }  
    else
    {
      this.serverError = "Please enter valid details";
    }
  }

  updateCustomerDetails() {
    var userData: CustomerDetailsModel | null = this.GetRegisterDetails();
    if(userData)
    {
      this.store.dispatch(new UpdateCustomerStartAction(userData))
    } 
  }
  
  createCustomerDetails() {
    var userData: CustomerDetailsModel | null = this.GetRegisterDetails();
    if(userData)
    {
      this.store.dispatch(new SignUpStartAction(userData))
    } 
  }

  IsAValidField(fieldControlName: string)
  {    
    var control = this.signUpFormGroup.get(fieldControlName);
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
    this.invalidFieldErrorMsg =  this.IsAValidField(field) ? GetErrorMessage(field) : "";
    return({
      'has-error' : this.IsAValidField(field)
    });
  }

  GetRegisterDetails(): CustomerDetailsModel | null {

    if(this.signUpFormGroup.value)
    {    
        return {
        id: this.userDetails.customerId,
        customerId: this.userDetails.customerId,
        name: this.signUpFormGroup.value.name,
        userPassword: this.signUpFormGroup.value.userPassword,
        userEmail: this.signUpFormGroup.value.userEmail,
        userName: this.signUpFormGroup.value.userName,
        userMobile: this.signUpFormGroup.value.userMobile,
        userDOB: this.signUpFormGroup.value.userDOB,
        userAddress: this.signUpFormGroup.value.userAddress,
        userState: this.signUpFormGroup.value.userState,
        userCountry: this.signUpFormGroup.value.userCountry,
        userCitizenship: this.signUpFormGroup.value.userCitizenship,
        userCitizenStatus: this.signUpFormGroup.value.userCitizenStatus,
        userGender: this.signUpFormGroup.value.userGender,
        userDocProof: this.signUpFormGroup.value.userDocProof,
        userDocNo: this.signUpFormGroup.value.userDocNo,
        userAccountType: this.signUpFormGroup.value.userAccountType,
        userBranchNamne: this.signUpFormGroup.value.userBranchNamne,
        userDepositAmount: this.signUpFormGroup.value.userDepositAmount,
        userRegDate: this.signUpFormGroup.value.userRegDate,
        userRefAccHolderName: this.signUpFormGroup.value.userRefAccHolderName,
        userAccHolderAddress: this.signUpFormGroup.value.userAccHolderAddress,
        userAccHolderNo: this.signUpFormGroup.value.userAccHolderNo,
        userGuardianType: this.signUpFormGroup.value.userGuardianType,
        userGuardianName: this.signUpFormGroup.value.userGuardianName,
        userMaritalStatus: this.signUpFormGroup.value.userMaritalStatus,
        updateCustomerError: ""
      };
    }
    return null;
  }

}


