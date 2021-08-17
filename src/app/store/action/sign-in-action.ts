import { Action } from "@ngrx/store";
import SignInModel from "src/app/model/sign-in-model";
import { SignInActionTypes } from "./sign-in-action-types";


export class GetSignInAction implements Action {
    readonly type = SignInActionTypes.SIGN_IN;
    constructor(public payLoad: SignInModel){}
}

export class GetSignInActionSuccess implements Action {
    readonly type = SignInActionTypes.SIGN_IN_SUCCESS;
    constructor(public payLoad: SignInModel){}

}

export class GetSignInActionFailure implements Action {
    readonly type = SignInActionTypes.SIGN_IN_FAIL;
    constructor(public payLoad: SignInModel){}
}