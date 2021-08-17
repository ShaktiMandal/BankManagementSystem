import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from "@ngrx/effects"
import { SignInAction, SignInActionTypes } from "../action/sign-in-action-types";
import { GetSignInAction, GetSignInActionFailure, GetSignInActionSuccess } from "../action/sign-in-action";
import { SignInService } from "src/app/services/sign-in-service";
import SignInModel from "src/app/model/sign-in-model";
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators'
import { Observable, of, pipe } from "rxjs";
import { Action } from "@ngrx/store";
import { SignUpFailureAction, SignUpStartAction, SignUpSuccessAction } from "../action/sign-up-action";
import { SignUpActionTypes } from "../action/sign-up-action-type";
import { SignUpService } from "src/app/services/sign-up-service";
import { Router } from "@angular/router";
import CustomerDetailsModel from "src/app/model/sign-up-model";
import { CommonApplicationService } from "src/app/services/common-application-service";

@Injectable()
export class SignUpEffects {

    MapCustomerDetails(response: any): CustomerDetailsModel {
       return {
        id: response.id,
        customerId: response.customerId,
        name: "",
        userPassword : "",
        userEmail: "",
        userName: "",
        userMobile: "",
        userDOB: "",
        userAddress: "",
        userState: "",
        userCountry: "",
        userCitizenship: "",
        userCitizenStatus: "",
        userGender: "",
        userDocProof: "",
        userDocNo: "",
        userAccountType: "",
        userBranchNamne: "",
        userDepositAmount: "",
        userRegDate: "",
        userRefAccHolderName: "",
        userAccHolderAddress: "",
        userAccHolderNo: "",
        userGuardianType: "",
        userGuardianName: "",
        userMaritalStatus: "",
        updateCustomerError: response.error
       }
    }

    getSignUp$: Observable<Action> = createEffect((): any => this.action$.pipe
        (           
            ofType<SignUpStartAction>(SignUpActionTypes.SIGN_UP),
            switchMap( (signUpAction: SignUpStartAction) => 
                {
                    return this.sigUpService.createAccount(signUpAction.payLoad)
                    .pipe(
                        mergeMap( response =>
                        {    
                            var createResponse = this.MapCustomerDetails(response)
                            if(response.success && createResponse.id.length > 0)    
                            {
                                return of(new SignUpSuccessAction(createResponse));
                            }
                            else
                            {
                                return of(new SignUpFailureAction(createResponse));
                            }
                        }),                        
                        catchError( error =>{
                          
                            var createResponse = this.MapCustomerDetails(error)
                            return of(new SignUpFailureAction(createResponse))
                        })                        
                    )
                }  
            )
        )
    );

    navigation = createEffect(() =>
    { 
        return this.action$.pipe(
        ofType(SignUpActionTypes.SIGN_UP_SUCCESS),
        tap((result: any) =>{
            if(result.payLoad.customerId)
            {
                this.commonService.setLoggedInUserDetails(result.payLoad);
                return this.router.navigateByUrl('/accountsummary', {state: result.payload})
            }

            return null;

        })
    )}, {dispatch: false});

    setUserDetails(): void {
      
    }
    constructor(public action$ : Actions, 
        private commonService: CommonApplicationService,
        private sigUpService: SignUpService, 
        private router: Router){}
  
}