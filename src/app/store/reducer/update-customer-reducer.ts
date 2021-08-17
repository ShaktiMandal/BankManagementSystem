import { Action } from "@ngrx/store";
import { InitialState } from "@ngrx/store/src/models";
import { switchMap } from "rxjs/operators";
import CustomerDetailsModel from "src/app/model/sign-up-model";
import { UpdateCustomerAction, UpdateCustomerActionTypes } from "../action/update-customer-actiontype";

const initialState: CustomerDetailsModel = {
    id: "",
    customerId: "",
    name: "",
    userName: "",
    userPassword: "",
    userEmail: "",
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

export function  UpdateCustomerReducer(state = initialState, action: Action)
{
    var updateCustomerAction = action as UpdateCustomerAction;

    switch(updateCustomerAction.type)
    {
        case UpdateCustomerActionTypes.UPDATE_CUSTOMER_START:{
            return {
                ...state
            }
        }
        case UpdateCustomerActionTypes.UPDATE_CUSTOMER_SUCCESS:{
            return {
                ...state
            }
        }
        case UpdateCustomerActionTypes.UPDATE_CUSTOMER_FAIL:{
            return {
                ...state,
                ...updateCustomerAction.payload
            }
        }
        case UpdateCustomerActionTypes.GET_CUSTOMER_START:{
            return {
                ...state,
                updateCustomerError: updateCustomerAction.payload.updateCustomerError
            }
        }
        case UpdateCustomerActionTypes.GET_CUSTOMER_SUCCESS:{
            return {
                ...state,
                ...updateCustomerAction.payload
            }
        }
        case UpdateCustomerActionTypes.GET_CUSTOMER_FAIL:{
            return {
                ...state,
                updateCustomerError: updateCustomerAction.payload.updateCustomerError
            }
        }

        default: {
            return state
        }
    }
}