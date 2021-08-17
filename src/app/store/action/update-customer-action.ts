import { Action } from "@ngrx/store";
import CustomerDetailsModel from "src/app/model/sign-up-model";
import { UpdateCustomerActionTypes } from "./update-customer-actiontype";

export class UpdateCustomerStartAction implements Action {
    readonly type = UpdateCustomerActionTypes.UPDATE_CUSTOMER_START;
    constructor(public payload: CustomerDetailsModel){}
}

export class UpdateCustomerSuccessAction implements Action {
    readonly type = UpdateCustomerActionTypes.UPDATE_CUSTOMER_SUCCESS;
    constructor(public payload: CustomerDetailsModel){}
}

export class UpdateCustomerFailedAction implements Action {
    readonly type = UpdateCustomerActionTypes.UPDATE_CUSTOMER_FAIL;
    constructor(public payload: CustomerDetailsModel){}
}

export class GetCustomerStartAction implements Action {
    readonly type = UpdateCustomerActionTypes.GET_CUSTOMER_START;
    constructor(public payload: CustomerDetailsModel){}
}

export class GetCustomerSuccessAction implements Action {
    readonly type = UpdateCustomerActionTypes.GET_CUSTOMER_SUCCESS;
    constructor(public payload: CustomerDetailsModel){}
}

export class GetCustomerFailedAction implements Action {
    readonly type = UpdateCustomerActionTypes.GET_CUSTOMER_FAIL;
    constructor(public payload: CustomerDetailsModel){}
}