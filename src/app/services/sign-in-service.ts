import { HttpClient, HttpClientModule } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import SignInModel from "../model/sign-in-model";

@Injectable({
    providedIn: 'root'
})

export class SignInService {

    constructor(private httpClient: HttpClient){}

    signIn(userData: SignInModel) {
        return this.httpClient.post<any>('https://localhost:5001/Authenticate/signin', userData, {        
            headers: {
                'Accept': 'Application/json, text/plain',   
                'content-type': 'application/json'
            }
        })
    };
}