import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoanDetails } from 'src/app/model/loan-model';
import SignInModel from 'src/app/model/sign-in-model';
import { CommonApplicationService } from 'src/app/services/common-application-service';
import { FieldName } from 'src/app/shared/fieldName';
import { GetErrorMessage } from 'src/app/shared/fieldValidator';
import { FormGeneratorComponent } from 'src/app/shared/form/form.component';  
import { FormValidatorRules } from 'src/app/shared/form/formvalidatorrules.component';
import { ApplyLoanActionStart } from 'src/app/store/action/loan-action';
import { AppState } from 'src/app/store/app-reducer';

@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css']
})
export class ApplyloanComponent implements OnInit, OnDestroy {

  serverError: string = "";
  isFormSubmitted: boolean = false;
  isDisplayPersonalLoan: boolean = false;
  isDisplayEductionLoan: boolean = false;
  applyLoanEvent : Observable<Event> = new Observable
  applyLoanForm: FormGroup = new FormGroup({});
  fieldName = new FieldName();

   userData:SignInModel = {
    userEmail:"", 
    passWord:"", 
    isUserLoggedIn: false, 
    signInError: "",
    customerId: "",
    authenticationToken: ""
  };

  ngUnsubscribe: Subject<void> = new Subject<void>();
  invalidFieldErrorMsg: string = "";
  
  constructor(private formGroup: FormGeneratorComponent, 
    private store: Store<AppState>,
    private commonApllicationService: CommonApplicationService) { }

  ngOnInit(): void {
    
    this.applyLoanForm = this.formGroup.CreateFormGroup({fieldsName: this.fieldName.loanFieldsName});
    this.store.select("loan").pipe(takeUntil(this.ngUnsubscribe)).subscribe(userLoans => {
      if(userLoans !== null && userLoans !== undefined)
      {
        if(userLoans.isLoanApplied)
        {
          this.applyLoanForm.reset();
          this.commonApllicationService.setUserPersonalLoan(userLoans.personalLoans);
          this.commonApllicationService.setUserEducationLoan(userLoans.educationLoans);
        }
  
      }
    });
    this.userData= this.commonApllicationService.getLoggedInUserDetails();
  }

  ngOnDestroy():void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSelectedLoanType(event: any)
  {
    if(event.target.value !== null && event.target.value !== undefined)
    {
        this.isDisplayEductionLoan = false;
        this.isDisplayPersonalLoan = false;

        if(event.target.value === "Personal Loan" || event.target.value === "House Loan")
        {
          this.isDisplayEductionLoan = false;
          this.isDisplayPersonalLoan = true;
          this.updateLoanTypeValidator(event.target.value)
        }

        if(event.target.value === "Education Loan")
        {
          this.isDisplayEductionLoan = true;
          this.isDisplayPersonalLoan = false;
          this.updateLoanTypeValidator(event.target.value)
        }
    }
  }

  IsAValidField(fieldControlName: string)
  {    
    var control = this.applyLoanForm.get(fieldControlName);
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

  OnApplyLoan()
  {
      if(this.applyLoanForm.valid)
      {
        var loanDetails: LoanDetails | null = this.getLoanDetails();
        if(loanDetails !== null)
        {
          this.store.dispatch(new ApplyLoanActionStart(loanDetails))
        }       
      }
      else
      {
        this.serverError = "Please enter valid details";
      }
  }
  getLoanDetails(): LoanDetails | null {
      return {
        customerId: this.userData.customerId,
        loanType : this.applyLoanForm.value.loanType,
        loanAmount: this.applyLoanForm.value.loanAmount,
        loanApplyDate: this.applyLoanForm.value.loanApplyDate,
        loanIssueDate: this.applyLoanForm.value.loanIssueDate,
        rateOfInterest: this.applyLoanForm.value.rateOfInterest,
        loanDuration: this.applyLoanForm.value.loanDuration !== null ? this.applyLoanForm.value.loanDuration.toString() : this.applyLoanForm.value.loanDuration,
        educationLoan: {
          courseFee: this.applyLoanForm.value.courseFee,
          course: this.applyLoanForm.value.course,
          fatherName: this.applyLoanForm.value.fatherName,
          fatherOccupation: this.applyLoanForm.value.fatherOccupation,
          fatherTotalExp: this.applyLoanForm.value.fatherTotalExp !== null?  this.applyLoanForm.value.fatherTotalExp.toString(): this.applyLoanForm.value.fatherTotalExp,
          fatherTotalCurrentExp: this.applyLoanForm.value.fatherTotalCurrentExp !== null? this.applyLoanForm.value.fatherTotalCurrentExp.toString() : this.applyLoanForm.value.fatherTotalCurrentExp,
          rationCardNo: this.applyLoanForm.value.rationCardNo,
          annualIncome: this.applyLoanForm.value.annualIncome,
        },
        personalLoan: {
          annualPersonalIncome: this.applyLoanForm.value.annualPersonalIncome,
          companyName: this.applyLoanForm.value.companyName,
          designation: this.applyLoanForm.value.designation,
          employeeTotaleExp: this.applyLoanForm.value.employeeTotaleExp !==null ? this.applyLoanForm.value.employeeTotaleExp.toString(): this.applyLoanForm.value.employeeTotaleExp,
          expCurrentCompany: this.applyLoanForm.value.expCurrentCompany !== null ? this.applyLoanForm.value.expCurrentCompany.toString() : this.applyLoanForm.value.expCurrentCompany,
        },
        personalLoans: [],
        educationLoans: [],
        applyLoanError: "" ,
        isLoanApplied: false       
      }
  }

  updateLoanTypeValidator(value: any) {
      if(this.applyLoanForm)
      {
        var loanTypeFields:string[] = [];
        this.clearLoanTypeValidator();

        if(value === "Personal Loan" || value === "House Loan")
        {
          var loanTypeFields:string[] = this.fieldName.personalField;
        }

        if(value === "Education Loan")
        {
          var loanTypeFields:string[] = this.fieldName.educationLoanField;
        }

        if(loanTypeFields.length > 0)
        {
          var formValidatorRules = new FormValidatorRules();          
          loanTypeFields.forEach(field => {
            var control = this.applyLoanForm.get(field);
            if(control)
            {
              var rules = formValidatorRules.rules.get(field);
              if(rules)
              {
                control.setValidators(rules);
              }           
            }
          })
        }
      }
  }

  clearLoanTypeValidator() {
    this.clearPersonalLoanField();
    this.clearEducationLoanField();  
  }

  clearEducationLoanField() {
    this.fieldName.educationLoanField.forEach(field => {
      var control = this.applyLoanForm.get(field);
      if(control)
      {
        control.clearValidators();
        control.updateValueAndValidity();
      }
    }); 
  }
  
  clearPersonalLoanField() {
    this.fieldName.personalField.forEach(field => {
      var control = this.applyLoanForm.get(field);
      if(control)
      {
        control.clearValidators();
        control.updateValueAndValidity();
      }
    }); 
  }
}


