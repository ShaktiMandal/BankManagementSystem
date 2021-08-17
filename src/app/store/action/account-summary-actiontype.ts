import {  FetchAccountSummaryActionStart, FetchAccountSummaryFailureAction, FetchAccountSummarySuccessAction } from "./account-summary-action"

export const AccountSummaryActionTypes = {    
    FETCH_ACCCOUNT_SUMMARY_START:"[Account Summary] Fetching account summary start",
    FETCH_ACCCOUNT_SUMMARY_SUCCESS:"[Account Summary] Fetching account summary succeed",
    FETCH_ACCCOUNT_SUMMARY_FAILED:"[Account Summary] Fetching account summary failed",
}

export type AccountSummaryAction = FetchAccountSummaryActionStart|FetchAccountSummaryFailureAction|FetchAccountSummarySuccessAction;

