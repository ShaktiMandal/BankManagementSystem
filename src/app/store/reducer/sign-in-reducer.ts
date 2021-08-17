import { Action } from '@ngrx/store';
import SignInModel from 'src/app/model/sign-in-model';
import { SignInAction, SignInActionTypes } from '../action/sign-in-action-types';

const initialState: SignInModel = {
    userEmail: "",
    passWord: "",
    isUserLoggedIn: false,
    customerId: "",
    authenticationToken: "",
    signInError: ""
}

export function SignInReducer(state: SignInModel = initialState, action: Action){
    const signInAction = action as SignInAction;
    switch(signInAction.type)
    {
        case SignInActionTypes.SIGN_IN:
            {
                return {
                    ...state,                   
                };
            }
        case SignInActionTypes.SIGN_IN_SUCCESS:
            {              
                return{
                    ...state,    
                    passWord: "", 
                    userEmail: signInAction.payLoad.userEmail,
                    customerId: signInAction.payLoad.customerId,    
                    authenticationToken : signInAction.payLoad.authenticationToken,                                
                    isUserLoggedIn: signInAction.payLoad.isUserLoggedIn,              
                    signInError: signInAction.payLoad.signInError
                }
            }
        case SignInActionTypes.SIGN_IN_FAIL:
            {
                return{
                    ...state,
                    isUserLoggedIn: signInAction.payLoad.isUserLoggedIn,
                    signInError: signInAction.payLoad.signInError
                }
            }
        default:
            {
                return state;
            }
    }
}