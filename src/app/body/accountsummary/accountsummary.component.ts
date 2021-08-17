import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EducationLoan, LoanModel, PersonalLoan } from 'src/app/model/loan-model';
import { CommonApplicationService } from 'src/app/services/common-application-service';
import { FetchAccountSummaryActionStart } from 'src/app/store/action/account-summary-action';
import { AppState } from 'src/app/store/app-reducer';
import { faEnvelope, faMobile, faRupeeSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})

export class AccountsummaryComponent implements OnInit, OnDestroy {

  stateData: any;
  isUserHasLoan: boolean = false;
  numbers: LoanModel[] = [];
  customerId: string = "";
  userLoans: LoanModel[] = [];
  accountDetails: any = {}
  ngUnsubscribe: Subject<void> = new Subject<void>();

  emailIcon = faEnvelope;
  contactIcon = faMobile;
  currency = faRupeeSign;

  constructor(private store: Store<AppState>, private route: Router, private commonApplicationService: CommonApplicationService) {   
    this.stateData = this.commonApplicationService.getLoggedInUserDetails();  
    this.updateLoanDetails();
   }

  updateLoanDetails() {
    var personalLoans = this.commonApplicationService.getUserPersonalLoan();
    var educationLoans = this.commonApplicationService.getUserEducationLoan();
  }

  ngOnInit(): void {
   
    if(this.stateData.customerId)
    {
      this.store.dispatch(new FetchAccountSummaryActionStart(this.stateData.customerId));
      this.store.select("accountSummary").pipe(takeUntil(this.ngUnsubscribe)).subscribe(userAccDetails =>{

        if(userAccDetails !== null && userAccDetails !== undefined)
        {
          if(userAccDetails.customerId.length > 0)
          {
            this.numbers = [];
            this.isUserHasLoan = true;
            this.accountDetails.name = userAccDetails.name;
            this.accountDetails.email = userAccDetails.email;
            this.accountDetails.phonenumber = userAccDetails.phonenumber;
            this.accountDetails.amount = userAccDetails.amount;
            this.accountDetails.customerId = userAccDetails.customerId;
            this.accountDetails.accountType = userAccDetails.accountType;

            if(userAccDetails.loans !== null 
              && userAccDetails.loans !== undefined 
              && userAccDetails.loans.length > 0)
            {
              userAccDetails.loans.forEach(loan => {
                this.numbers.push(loan);
              });
            }
            this.commonApplicationService.setCustomerDetails(userAccDetails);
          }
        }        
        });
    }
  }

  ngOnDestroy():void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
