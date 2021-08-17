import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonApplicationService } from '../services/common-application-service';
import { SignInService } from '../services/sign-in-service';
import { LogOutStartAction, LogOutSuccessAction } from '../store/action/log-out-action';
import { AppState } from '../store/app-reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  constructor(private commonAppService: CommonApplicationService, private store: Store<AppState>) { 
    this.commonAppService.userDataEvent.subscribe(data =>{
      if(data.isUserLoggedIn)
      {
        this.isUserLoggedIn = true;
      }
      else
      {
        this.isUserLoggedIn = false;
      }
    })

  }

  ngOnInit(): void {    
  }

  OnApplyLoan(eventData: string){
      
  }

  OnUpdateCustomer(eventData: string){
    
  }

  OnLogOut(eventData: string){
    this.store.dispatch(new LogOutStartAction());
  }

}
