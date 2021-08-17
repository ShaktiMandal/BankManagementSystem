import { GetCustomerFailedAction, GetCustomerStartAction, GetCustomerSuccessAction, UpdateCustomerFailedAction, UpdateCustomerStartAction, UpdateCustomerSuccessAction } from "./update-customer-action"

export const UpdateCustomerActionTypes = {
    UPDATE_CUSTOMER_START: "[POST] update customer start",
    UPDATE_CUSTOMER_SUCCESS: "[POST] update customer succeed",
    UPDATE_CUSTOMER_FAIL: "[POST] update customer failed",
    GET_CUSTOMER_START: "[GET] get customer start",
    GET_CUSTOMER_SUCCESS: "[GET] get customer succeed",
    GET_CUSTOMER_FAIL: "[GET] get customer failed"
}


export type UpdateCustomerAction = 
UpdateCustomerStartAction 
| UpdateCustomerSuccessAction 
| UpdateCustomerFailedAction 
| GetCustomerStartAction 
| GetCustomerSuccessAction 
| GetCustomerFailedAction;