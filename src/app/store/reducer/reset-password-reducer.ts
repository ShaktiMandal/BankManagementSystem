import { Action } from "@ngrx/store";
import ResetPasswordModel from "src/app/model/reset-password-model";
import { ResetPasswordAction, ResetPasswordActionTypes } from "../action/reset-password-actiontype";

const initialState: ResetPasswordModel = {
    userEmail: "",
    password: "",
    confirmPassword: "",
    isPasswordSuccess: false,
    resetPasswordError: ""
}

export function ResetPasswordReducer(state: ResetPasswordModel = initialState, action: Action)
{
    var resetPasswordAction = action as ResetPasswordAction;
    switch(resetPasswordAction.type)
    {
        case ResetPasswordActionTypes.RESET_PASSWORD_START:
            {
                return {
                    ...state
                }
            }
        case ResetPasswordActionTypes.RESET_PASSWORD_SUCCESS:
            {
                return {
                    ...state,
                    resetPasswordError : resetPasswordAction.payLoad.resetPasswordError,
                    isPasswordSuccess: resetPasswordAction.payLoad.resetPasswordError.length === 0 ? true : false
                }
            }
        case ResetPasswordActionTypes.RESET_PASSWORD_FAIL:
            {
                return {
                    ...state,
                    resetPasswordError: resetPasswordAction.payLoad.resetPasswordError,
                    isPasswordSuccess: resetPasswordAction.payLoad.resetPasswordError.length === 0 ? true : false
                }
            }
        default:
            {
                return state;
            }
    }
}