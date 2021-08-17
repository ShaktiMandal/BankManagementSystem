import { Action } from "@ngrx/store";
import { LoanDetails } from "src/app/model/loan-model";
import { LoanAction, LoanActionTypes } from "../action/loan-actiontype";

const initialState: LoanDetails = {
    customerId: "",
    loanType : "",
    loanAmount: "",
    loanApplyDate: "",
    loanIssueDate: "",
    rateOfInterest: "",
    loanDuration: "",
    personalLoan: 
    { 
        annualPersonalIncome: "",
        companyName: "",
        designation: "",
        employeeTotaleExp: "",
        expCurrentCompany: ""
    },
    educationLoan: 
    {
        courseFee: "",
        course: "",
        fatherName: "",
        fatherOccupation: "",
        fatherTotalExp: "",
        fatherTotalCurrentExp: "",
        rationCardNo: "",
        annualIncome: "",
    },    
    personalLoans: [],
    educationLoans: [],
    applyLoanError: "",
    isLoanApplied: false
}


export function LoanReducer(state = initialState, action: Action)
{
    var loanAction = action as LoanAction;

    switch(loanAction.type)
    {
        case LoanActionTypes.APPLY_LOAN_START:
            {
                    return {
                    ...state
                }
            }
        case LoanActionTypes.APPLY_LOAN_SUCCESS:
            {
                    return {
                    ...state,
                    isLoanApplied: loanAction.payload.isLoanApplied,
                    personaLoans: loanAction.payload.personalLoans,
                    educationLoans: loanAction.payload.educationLoans
                }
            }
        case LoanActionTypes.APPLY_LOAN_FAIL:
            {
                    return {
                    ...state,
                    applyLoanError: loanAction.payload.applyLoanError
                }
            }

        default:
            {
                return state;
            }
    }
}