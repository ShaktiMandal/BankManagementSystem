import { Action } from "@ngrx/store";
import { LoanDetails } from "src/app/model/loan-model";
import { LoanActionTypes } from "./loan-actiontype";


export class ApplyLoanActionStart implements Action
{
    readonly  type = LoanActionTypes.APPLY_LOAN_START;
    constructor(public payload: LoanDetails){}
}

export class ApplyLoanActionSucceed implements Action
{
    readonly  type = LoanActionTypes.APPLY_LOAN_SUCCESS;
    constructor(public payload: LoanDetails){}
}

export class ApplyLoanActionFailed implements Action
{
    readonly  type = LoanActionTypes.APPLY_LOAN_FAIL;
    constructor(public payload: LoanDetails){}
}

export class GetLoanActionStart implements Action
{
    readonly  type = LoanActionTypes.GET_LOAN_START;
    constructor(public payload: LoanDetails){}
}

export class GetLoanActionSucceed implements Action
{
    readonly  type = LoanActionTypes.GET_LOAN_SUCCESS;
    constructor(public payload: LoanDetails){}
}

export class GetLoanActionFailed implements Action
{
    readonly  type = LoanActionTypes.GET_LOAN_FAIL;
    constructor(public payload: LoanDetails){}
}
