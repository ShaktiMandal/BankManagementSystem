import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import SignInModel from './model/sign-in-model';
import { CommonApplicationService } from './services/common-application-service';
import { GetSignInActionSuccess } from './store/action/sign-in-action';
import { AppState } from './store/app-reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'bank-management-system';
  constructor(private commonService: CommonApplicationService, private store: Store<AppState>){}
  ngOnInit(): void {
      var hasUserData = localStorage.getItem("hasUserData");
      if(hasUserData!== null && hasUserData.length > 0)
      {
        let userDetails: SignInModel = {
          authenticationToken: "",
          customerId : hasUserData,
          userEmail: "",
          isUserLoggedIn: true,
          passWord: "",
          signInError: ""
        };

        this.store.dispatch(new GetSignInActionSuccess(userDetails));              
      }
  }
}
