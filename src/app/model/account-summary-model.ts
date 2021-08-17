import { LoanModel } from "./loan-model";

export interface AccountSummaryModel {
    name:string,
    amount: string,
    customerId: string,
    phonenumber: number,
    email: string,
    accountType: "",
    loans: LoanModel[],
    accountSummaryError: ""
}

export interface AccountTypeModel {
    typeId: string,
    accountType: string,
    currentBalance: number,
    ledgerBalance: number
}