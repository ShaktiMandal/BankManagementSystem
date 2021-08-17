import { ApplyLoanActionFailed, ApplyLoanActionStart, ApplyLoanActionSucceed } from "./loan-action"

export const LoanActionTypes = {

    APPLY_LOAN_START: "[POST] apply loan start",
    APPLY_LOAN_SUCCESS: "[POST] apply loan success",
    APPLY_LOAN_FAIL: "[POST] apply loan fail",

    GET_LOAN_START: "[GET] apply loan start",
    GET_LOAN_SUCCESS: "[GET] apply loan success",
    GET_LOAN_FAIL: "[GET] apply loan fail"
}


export type LoanAction = ApplyLoanActionStart | ApplyLoanActionSucceed | ApplyLoanActionFailed;