import { Action } from '@ngrx/store';
import CustomerDetailsModel from 'src/app/model/sign-up-model';
import { SignUpAction, SignUpActionTypes } from '../action/sign-up-action-type';

const initialState: CustomerDetailsModel = {
    id: "",
    customerId: "",
    name: "",
    userPassword : "",
    userEmail: "",
    userName: "",
    userMobile: "",
    userDOB: "",
    userAddress: "",
    userState: "",
    userCountry: "",
    userCitizenship: "",
    userCitizenStatus: "",
    userGender: "",
    userDocProof: "",
    userDocNo: "",
    userAccountType: "",
    userBranchNamne: "",
    userDepositAmount: "",
    userRegDate: "",
    userRefAccHolderName: "",
    userAccHolderAddress: "",
    userAccHolderNo: "",
    userGuardianType: "",
    userGuardianName: "",
    userMaritalStatus: "",
    updateCustomerError: ""
}

export function SignInReducer(state: CustomerDetailsModel = initialState, action: Action){
    const signUpAction = action as SignUpAction;
    switch(signUpAction.type)
    {
        case SignUpActionTypes.SIGN_UP:
            {
                return {
                    ...state,                   
                };
            }
        case SignUpActionTypes.SIGN_UP_SUCCESS:
            {
                return{
                    ...state,  
                    id: signUpAction.payLoad.id,  
                    customerId: signUpAction.payLoad.customerId,                               
                    updateCustomerError: signUpAction.payLoad.updateCustomerError,                  
                }
            }
        case SignUpActionTypes.SIGN_UP_FAIL:
            {
                return{
                    ...state,                   
                    updateCustomerError: signUpAction.payLoad.updateCustomerError     
                }
            }
        default:
            {
                return state;
            }
    }
}