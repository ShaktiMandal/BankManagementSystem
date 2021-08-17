import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, mergeMap, switchMap } from "rxjs/operators";
import { AccountSummaryModel } from "src/app/model/account-summary-model";
import { AccountSummaryService } from "src/app/services/account-summary-service";
import { FetchAccountSummaryActionStart, FetchAccountSummaryFailureAction, FetchAccountSummarySuccessAction } from "../action/account-summary-action";
import { AccountSummaryAction, AccountSummaryActionTypes } from "../action/account-summary-actiontype";

@Injectable()
export class AccountSummaryEffect {
    

    constructor(private actions: Actions, private service: AccountSummaryService){}

    MapAccountSummaryModel(response: any):AccountSummaryModel {
        return{
            customerId: response.accountDetails.customerId,
            amount: response.accountDetails.userDepositAmount,
            accountType: response.accountDetails.userAccountType,
            email: response.accountDetails.userEmail,
            name: response.accountDetails.name,
            phonenumber: response.accountDetails.userMobile,
            loans: response.loans,
            accountSummaryError: response.error            
        }
    }

    fetchAccountSummary$ = createEffect(() => {
        return this.actions.pipe(
            ofType<FetchAccountSummaryActionStart>(AccountSummaryActionTypes.FETCH_ACCCOUNT_SUMMARY_START),
            switchMap((action: FetchAccountSummaryActionStart) =>{
                return this.service.fetchAccountSummary(action.payload)
                .pipe(
                    mergeMap(response => {
                        var accountSummaryModel = this.MapAccountSummaryModel(response);
                        return of(new FetchAccountSummarySuccessAction(accountSummaryModel))
                    }),
                    catchError(error => {
                        return of(new FetchAccountSummaryFailureAction(error))
                    })
                )
            })
        )
    })
}