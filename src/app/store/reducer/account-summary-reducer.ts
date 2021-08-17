import { Action } from "@ngrx/store";
import { AccountSummaryModel } from "src/app/model/account-summary-model";
import { AccountSummaryAction, AccountSummaryActionTypes } from "../action/account-summary-actiontype";


const initialState: AccountSummaryModel ={
    name:"",
    amount: "",
    customerId: "",
    phonenumber:0,
    email: "",
    accountType: "",
    loans: [],
    accountSummaryError: ""
}

export function AccountSummaryReducer(state: AccountSummaryModel = initialState, action: Action){

    const accountSummaryAction = action as AccountSummaryAction;
    switch(accountSummaryAction.type)
    {    
        case AccountSummaryActionTypes.FETCH_ACCCOUNT_SUMMARY_START:
            {
                return{
                    ...state
                }
            }
        case AccountSummaryActionTypes.FETCH_ACCCOUNT_SUMMARY_SUCCESS:
            {
                return{
                    ...state,
                    name: accountSummaryAction.payload.name,
                    amount: accountSummaryAction.payload.amount,
                    customerId: accountSummaryAction.payload.customerId,
                    phonenumber:accountSummaryAction.payload.phonenumber,
                    email: accountSummaryAction.payload.email,                   
                    loans: accountSummaryAction.payload.loans,
                    accountType: accountSummaryAction.payload.accountType,
                    accountSummaryError: accountSummaryAction.payload.accountSummaryError
                }
            }
            case AccountSummaryActionTypes.FETCH_ACCCOUNT_SUMMARY_FAILED:
            {
                return{
                    ...state,
                    accountSummaryError: accountSummaryAction.payload.accountSummaryError
                }
            }
        default:
            {
                return state;
            }
    }
}