import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { CommonApplicationService } from "src/app/services/common-application-service";
import { LogOutStartAction, LogOutSuccessAction } from "../action/log-out-action";
import { LogOutActionTypes } from "../action/log-out-actiontype";


@Injectable()
export class LogOutEffect {    

    constructor(private router: Router, private actions: Actions, private commonService : CommonApplicationService){}

    performLogOutActivity() {
       this.commonService.clearLocalStorage();
       this.commonService.clearUserDeails();
       this.commonService.clearCustomerDeails();
    }

    logOutEffect = createEffect(() => this.actions.pipe(
        ofType<LogOutStartAction>(LogOutActionTypes.LOG_OUT_START),
        switchMap( () => {
            this.performLogOutActivity();
            return of(new LogOutSuccessAction())
        }))
    )

    navigation = createEffect(()=> this.actions.pipe(
        ofType(LogOutActionTypes.LOG_OUT_SUCCESS),
        tap(()=> this.router.navigateByUrl('/signin'))
    ), {dispatch: false})

}