import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import CustomerDetailsModel from "../model/sign-up-model";

@Injectable({
    providedIn: 'root'
})

export class UpdateAccountService {

    constructor(private httpClient: HttpClient){}

    updateAccount(customerDetails: CustomerDetailsModel){
        return this.httpClient.post<any>('https://localhost:5001/Account/updateaccount', customerDetails, {
            headers: {
                'Accept': 'Application/json, text/plain',
                'content-type': 'application/json'
            }});
    }

    getCustomerDetails(customerDetails: CustomerDetailsModel){
        var baseUrl = 'https://localhost:5001/Account';
        var customerId = customerDetails.id;
        return this.httpClient.get<any>(`${baseUrl}/${customerId}`);
    }

}