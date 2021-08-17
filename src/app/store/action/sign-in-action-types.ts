import { GetSignInAction, GetSignInActionFailure, GetSignInActionSuccess } from "./sign-in-action"

export const SignInActionTypes = {
    SIGN_IN: "Sign in",
    SIGN_IN_SUCCESS: "Sign in success",
    SIGN_IN_FAIL: "Sign in failure"
}

export type SignInAction = GetSignInAction | GetSignInActionSuccess | GetSignInActionFailure;