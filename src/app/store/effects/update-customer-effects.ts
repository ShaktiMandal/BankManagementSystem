import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, mergeMap, switchMap, tap } from "rxjs/operators";
import CustomerDetailsModel from "src/app/model/sign-up-model";
import { UpdateAccountService } from "src/app/services/update-account-service";
import { GetCustomerFailedAction, GetCustomerStartAction, GetCustomerSuccessAction, UpdateCustomerFailedAction, UpdateCustomerStartAction, UpdateCustomerSuccessAction } from "../action/update-customer-action";
import { UpdateCustomerActionTypes } from "../action/update-customer-actiontype";

@Injectable()
export class UpdateCustomerEffect {
  

    constructor(private service: UpdateAccountService, private actions: Actions, private router: Router){}
   
    MapCustomerDetails(response: any): CustomerDetailsModel{
       return {           
            id: response.accountDetails.id,
            customerId: response.accountDetails.customerId,
            name: response.accountDetails.name,
            userName: response.accountDetails.userName,
            userPassword: response.accountDetails.userPassword,
            userEmail: response.accountDetails.userEmail,
            userMobile: response.accountDetails.userMobile,
            userDOB: response.accountDetails.userDOB,
            userAddress: response.accountDetails.userAddress,
            userState: response.accountDetails.userState,
            userCountry: response.accountDetails.userCountry,
            userCitizenship: response.accountDetails.userCitizenship,
            userCitizenStatus: response.accountDetails.userCitizenStatus,
            userGender: response.accountDetails.userGender,
            userDocProof: response.accountDetails.userDocProof,
            userDocNo: response.accountDetails.userDocNo,
            userAccountType: response.accountDetails.userAccountType,
            userBranchNamne: response.accountDetails.userBranchNamne,
            userDepositAmount: response.accountDetails.userDepositAmount,
            userRegDate: response.accountDetails.userRegDate,
            userRefAccHolderName: response.accountDetails.userRefAccHolderName,
            userAccHolderAddress: response.accountDetails.userRefAccHolderName,
            userGuardianType: response.accountDetails.userGuardianType,
            userGuardianName: response.accountDetails.userGuardianName,
            userMaritalStatus: response.accountDetails.userMaritalStatus,
            userAccHolderNo: response.accountDetails.userAccHolderNo,
            updateCustomerError: response.error,
       }
    }

    updateAccountEffect = createEffect(() => this.actions.pipe(
        ofType<UpdateCustomerStartAction>(UpdateCustomerActionTypes.UPDATE_CUSTOMER_START),
        switchMap((actions: UpdateCustomerStartAction) => {
            return this.service.updateAccount(actions.payload)
            .pipe(
                mergeMap(response => {
                    let customerDetails = this.MapCustomerDetails(response)
                    return of(new UpdateCustomerSuccessAction(customerDetails))
                }),

                catchError(error => {
                    return of(new UpdateCustomerFailedAction(error))
                })
            )
        })
    ))

    getCustomerEffect = createEffect(() => {
        return this.actions.pipe(
            ofType<GetCustomerStartAction>(UpdateCustomerActionTypes.GET_CUSTOMER_START),
            switchMap((action: GetCustomerStartAction) =>{
                return this.service.getCustomerDetails(action.payload)
                .pipe(
                    mergeMap(response => {
                        var customerDetails = this.MapCustomerDetails(response);
                        return of(new GetCustomerSuccessAction(customerDetails))
                    }),
                    catchError(error => {
                        return of(new GetCustomerFailedAction(error))
                    })
                )
            })
        )
    })

    navigation = createEffect(() => {
        return this.actions.pipe(
        ofType(UpdateCustomerActionTypes.UPDATE_CUSTOMER_SUCCESS),
        tap(() => this.router.navigateByUrl('/accountsummary')))
    }, {dispatch: false})
}