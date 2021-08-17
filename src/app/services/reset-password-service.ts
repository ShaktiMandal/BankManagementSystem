import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import ResetPasswordModel from "../model/reset-password-model";

@Injectable({
    providedIn: 'root'
})

export class ResetPasswordService {

    constructor(private httpClient: HttpClient){}

    resetPassword(userDetails: ResetPasswordModel) {
        return this.httpClient.post<any>('https://localhost:5001/Authenticate/resetPassword', userDetails, {
            headers: {
                'Accept': 'Application/json, text/plain',   
                'content-type': 'application/json'
            }
        })
    }
}