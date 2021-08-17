import { Action } from "@ngrx/store";
import { LogOutActionTypes } from "./log-out-actiontype";


export class LogOutStartAction implements Action {

    readonly type = LogOutActionTypes.LOG_OUT_START;
    constructor(){}
}

export class LogOutSuccessAction implements Action {

    readonly type = LogOutActionTypes.LOG_OUT_SUCCESS;
    constructor(){}
}

export class LogOutFailedAction implements Action {

    readonly type = LogOutActionTypes.LOG_OUT_FAIL;
    constructor(){}
}