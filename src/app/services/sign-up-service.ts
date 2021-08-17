import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import CustomerDetailsModel from "../model/sign-up-model";

@Injectable({
    providedIn: 'root'
})

export class SignUpService {

    constructor(private httpClient: HttpClient){}
    createAccount(userData: CustomerDetailsModel) {
        return this.httpClient.post<any>('https://localhost:5001/Account/CreateAccount',userData, {
            headers: {
                'Accept': 'Application/json, text/plain',
                'content-type': 'application/json'
            }
        });
    }
}