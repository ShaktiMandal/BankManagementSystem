import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AccountSummaryModel } from "../model/account-summary-model";;

@Injectable({
    providedIn: 'root'
})

export class AccountSummaryService {

    constructor(private httpClient: HttpClient){}
    fetchAccountSummary(userData: AccountSummaryModel) {
        var baseUrl = 'https://localhost:5001/Account';
        var customerId = userData;
        return this.httpClient.get<any>(`${baseUrl}/${customerId}`);
    }
}