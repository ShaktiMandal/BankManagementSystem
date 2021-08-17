import { LogOutFailedAction, LogOutStartAction, LogOutSuccessAction } from "./log-out-action"

export const LogOutActionTypes = {
    LOG_OUT_START : "[Log Out] started",
    LOG_OUT_SUCCESS : "[Log Out] succeed",
    LOG_OUT_FAIL : "[Log Out] failed",
}

export type LogOutAction = LogOutStartAction | LogOutSuccessAction | LogOutFailedAction;