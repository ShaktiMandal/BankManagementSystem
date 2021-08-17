import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, mergeMap, switchMap, tap } from "rxjs/operators";
import { LoanDetails } from "src/app/model/loan-model";
import { LoanService } from "src/app/services/loan-service";
import { ApplyLoanActionFailed, ApplyLoanActionStart, ApplyLoanActionSucceed } from "../action/loan-action";
import { LoanActionTypes } from "../action/loan-actiontype";

@Injectable()
export class LoanEffect {

    constructor(private actions: Actions, private loanService: LoanService, private router: Router) {}

    MapLoanDetails(response: any): LoanDetails {
        return {
            applyLoanError: response.error,
            customerId: response.customerId,
            educationLoans: response.educationLoan,
            personalLoans: response.personalLoans,
            isLoanApplied : response.success && response.error.length === 0 ? true : false,
            loanAmount: response.loanAmount,
            loanApplyDate: response.loanApplyDate,
            loanDuration: response.loanDuration,
            loanIssueDate: response.loanIssueDate,
            loanType: response.loanType,
            rateOfInterest: response.rateOfInterest,
            educationLoan: {
                courseFee: "",
                course: "",
                fatherName: "",
                fatherOccupation: "",
                fatherTotalExp: "",
                fatherTotalCurrentExp: "",
                rationCardNo: "",
                annualIncome: "",
            },
            personalLoan: {
                annualPersonalIncome: "",
                companyName: "",
                designation: "",
                employeeTotaleExp: "",
                expCurrentCompany: ""
            }
        }
    }

    applyLoanEffect = createEffect(() => this.actions.pipe(
        ofType<ApplyLoanActionStart>(LoanActionTypes.APPLY_LOAN_START),
        switchMap((actions: ApplyLoanActionStart) =>{
            return this.loanService.applyLoanService(actions.payload)
            .pipe(
                mergeMap(response => {    
                    
                    var loanDetailsModel = this.MapLoanDetails(response)
                    return of(new ApplyLoanActionSucceed(loanDetailsModel))
                }),

                catchError(error => {
                    return of(new ApplyLoanActionFailed(error))
                })
                
                )
        }))
    )

    navigation = createEffect((): any => 
    {
        return this.actions.pipe(
        ofType(LoanActionTypes.APPLY_LOAN_SUCCESS),
        tap(()=> this.router.navigateByUrl('/accountsummary')))
    }, {dispatch: false});
}