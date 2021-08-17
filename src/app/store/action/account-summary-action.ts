import { Action } from "@ngrx/store";
import { AccountSummaryModel } from "src/app/model/account-summary-model";
import { AccountSummaryActionTypes } from "./account-summary-actiontype";


export class FetchAccountSummaryActionStart implements Action {
    readonly type = AccountSummaryActionTypes.FETCH_ACCCOUNT_SUMMARY_START;
    constructor(public payload: AccountSummaryModel){}
}

export class FetchAccountSummarySuccessAction implements Action {
    readonly type = AccountSummaryActionTypes.FETCH_ACCCOUNT_SUMMARY_SUCCESS;
    constructor(public payload: AccountSummaryModel){}
}

export class FetchAccountSummaryFailureAction implements Action {
    readonly type = AccountSummaryActionTypes.FETCH_ACCCOUNT_SUMMARY_FAILED;
    constructor(public payload: AccountSummaryModel){}
}