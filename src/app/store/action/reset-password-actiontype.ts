import { ResetPasswordActionFailure, ResetPasswordActionSuccess, ResetPasswordStartAction } from "./reset-password-action"

export const ResetPasswordActionTypes = {
    RESET_PASSWORD_START: "[POST] Reset password start",
    RESET_PASSWORD_SUCCESS: "[POST] Reset password success",
    RESET_PASSWORD_FAIL: "[POST] Reset password failure"
}

export type ResetPasswordAction = ResetPasswordActionFailure | ResetPasswordStartAction | ResetPasswordActionSuccess;