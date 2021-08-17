import { Action } from "@ngrx/store";
import resetPasswordModel from "src/app/model/reset-password-model";
import { ResetPasswordActionTypes } from "./reset-password-actiontype";


export class ResetPasswordStartAction implements Action {
    readonly type = ResetPasswordActionTypes.RESET_PASSWORD_START;
    constructor(public payLoad: resetPasswordModel){}
}

export class ResetPasswordActionSuccess implements Action {
    readonly type = ResetPasswordActionTypes.RESET_PASSWORD_SUCCESS;
    constructor(public payLoad: resetPasswordModel){}

}

export class ResetPasswordActionFailure implements Action {
    readonly type = ResetPasswordActionTypes.RESET_PASSWORD_FAIL;
    constructor(public payLoad: resetPasswordModel){}
}