import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from "@ngrx/effects"
import { SignInAction, SignInActionTypes } from "../action/sign-in-action-types";
import { GetSignInAction, GetSignInActionFailure, GetSignInActionSuccess } from "../action/sign-in-action";
import { SignInService } from "src/app/services/sign-in-service";
import SignInModel from "src/app/model/sign-in-model";
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators'
import { Observable, of, pipe } from "rxjs";
import { Action } from "@ngrx/store";
import { Router } from "@angular/router";
import { GetCustomerFailedAction } from "../action/update-customer-action";
import { CommonApplicationService } from "src/app/services/common-application-service";

@Injectable()
export class SignInEffects {


    MapAuthenticationDetails(response: any): SignInModel {
        return{          
                userEmail:  response.userEmail,
                passWord:  response.password,
                signInError:  response.error,
                customerId: response.customerId,
                authenticationToken: response.token,
                isUserLoggedIn : response.customerId === null 
                                || response.customerId === undefined 
                                || response.customerId === ""  ? false : true
            };
    }
    

    getSignIn$: Observable<Action> = createEffect((): any => this.action$.pipe
        (
            ofType<GetSignInAction>(SignInActionTypes.SIGN_IN),
            switchMap( (signInAction: GetSignInAction) => 
                {
                    return this.sigInService.signIn(signInAction.payLoad)
                    .pipe(
                        mergeMap( response =>
                        {                            
                            var authenticationResponse = this.MapAuthenticationDetails(response);
                            if(authenticationResponse.isUserLoggedIn)
                            {
                                return of(new GetSignInActionSuccess(authenticationResponse));
                            }
                            else
                            {
                                return of(new GetSignInActionFailure(authenticationResponse));
                            }                           
                        }),                        
                        catchError( error =>{ 
                            var authenticationResponse = this.MapAuthenticationDetails(error);
                            return of(new GetSignInActionFailure(authenticationResponse));
                        })                        
                    )
                }  
            )
        )
    );


    navigation$ = createEffect((): any => 
    { 
        return this.action$.pipe(
        ofType(SignInActionTypes.SIGN_IN_SUCCESS),            
        tap((result: any) =>  
             {
                 if(result.payLoad.customerId)
                 {
                    this.commonAppService.setLoggedInUserDetails(result.payLoad);   
                    return  this.route.navigateByUrl('/accountsummary', {state: result.payLoad})
                 }

                 return null;
             }      
           ))
    }, {dispatch: false});
   

    constructor(public action$ : Actions, 
        private sigInService: SignInService, 
        private commonAppService: CommonApplicationService, 
        private route : Router){
    }
  
}