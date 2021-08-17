import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoanDetails } from "../model/loan-model";


@Injectable({
    providedIn: 'root'
})

export class LoanService {

    constructor(private httpsClient: HttpClient){}

    applyLoanService(loanData: LoanDetails) {
        return this.httpsClient.post<any>('https://localhost:5001/Account/applyLoan', loanData, {        
            headers: {
                'Accept': 'Application/json, text/plain',   
                'content-type': 'application/json'
            }});
    }
}