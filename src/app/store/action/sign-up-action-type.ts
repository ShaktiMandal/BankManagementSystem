import { SignUpFailureAction, SignUpStartAction, SignUpSuccessAction } from "./sign-up-action";

export const SignUpActionTypes = {
    SIGN_UP: "[Create Account] Sign up start",
    SIGN_UP_SUCCESS: "[Create Account] Sign up success",
    SIGN_UP_FAIL: "[Create Account] Sign up failure"
}

export type SignUpAction = SignUpStartAction | SignUpSuccessAction | SignUpFailureAction;