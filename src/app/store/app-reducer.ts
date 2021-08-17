import { ActionReducerMap } from "@ngrx/store";
import { AccountSummaryModel } from "../model/account-summary-model";
import SignInModel from "../model/sign-in-model";
import * as fromSignInReducer from "./reducer/sign-in-reducer";
import * as fromAccountSummaryReducer from "./reducer/account-summary-reducer";
import * as fromSignUpReducer from "./reducer/sign-up-reducer";
import * as fromLoanReducer from "./reducer/loan-reducer";
import * as fromUpdateCustomerReducer from "./reducer/update-customer-reducer";
import * as fromResetPasswordReducer from "./reducer/reset-password-reducer";
import CustomerDetailsModel from "../model/sign-up-model";
import { LoanDetails } from "../model/loan-model";
import ResetPasswordModel from "../model/reset-password-model";

export interface AppState{
    signIn: SignInModel,
    signUp: CustomerDetailsModel,
    accountSummary: AccountSummaryModel,
    loan: LoanDetails,
    customerUpdate: CustomerDetailsModel,
    resetPassword: ResetPasswordModel
}

export const AppReducer: ActionReducerMap<AppState> = {
    signIn: fromSignInReducer.SignInReducer,
    signUp: fromSignUpReducer.SignInReducer,
    accountSummary : fromAccountSummaryReducer.AccountSummaryReducer,
    loan: fromLoanReducer.LoanReducer,
    customerUpdate: fromUpdateCustomerReducer.UpdateCustomerReducer,
    resetPassword: fromResetPasswordReducer.ResetPasswordReducer
}