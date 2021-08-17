import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, mergeMap, switchMap, tap } from "rxjs/operators";
import ResetPasswordModel from "src/app/model/reset-password-model";
import { ResetPasswordService } from "src/app/services/reset-password-service";
import { ResetPasswordActionFailure, ResetPasswordActionSuccess, ResetPasswordStartAction } from "../action/reset-password-action";
import { ResetPasswordActionTypes } from "../action/reset-password-actiontype";


@Injectable()
export class ResetPasswordEffect {
   
    constructor(private service:ResetPasswordService, private actions: Actions, private router: Router) {}

    MapResetPasswordDetails(response: any): ResetPasswordModel {
        
        return {
            confirmPassword : response.confirmPassword,
            isPasswordSuccess : response.error.length > 0 ? true : false,
            password : response.password,
            resetPasswordError : response.error,
            userEmail : response.userEmail
        }
    }

    resetPasswordEffect = createEffect(() => this.actions.pipe(
        ofType<ResetPasswordStartAction>(ResetPasswordActionTypes.RESET_PASSWORD_START),
        switchMap( (actions: ResetPasswordStartAction) => {
            return this.service.resetPassword(actions.payLoad)
            .pipe(
                mergeMap(response => {   
                    var resetPasswordResponse = this.MapResetPasswordDetails(response) 
                    if(response.success) 
                    {
                        return of(new ResetPasswordActionSuccess(resetPasswordResponse))
                    }  
                    else
                    {
                        return of(new ResetPasswordActionFailure(resetPasswordResponse))
                    }              
                }),
                catchError(error => {
                    var resetPasswordResponse = this.MapResetPasswordDetails(error) 
                    return of(new ResetPasswordActionFailure(resetPasswordResponse))
                })
            )
        })
    ));
    
    navigation = createEffect(() => this.actions.pipe(
        ofType(ResetPasswordActionTypes.RESET_PASSWORD_SUCCESS),
        tap((result: any )=> {
            if(result.payLoad.resetPasswordError.length === 0)
            {
                this.router.navigateByUrl('\signin')
            }           
        })
    ), {dispatch: false});
}