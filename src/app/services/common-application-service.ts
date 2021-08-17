import { createElementCssSelector } from "@angular/compiler";
import { EventEmitter, Injectable } from "@angular/core";
import { EducationLoan, PersonalLoan } from "../model/loan-model";
import SignInModel from "../model/sign-in-model";
import CustomerDetailsModel from "../model/sign-up-model";

@Injectable({
    providedIn: 'root'
})
export class CommonApplicationService{

    userDetails: SignInModel = {
        userEmail: "",
        passWord: "",
        isUserLoggedIn: false,
        customerId: "",
        authenticationToken: "",
        signInError: ""
    }

    customerDetails: CustomerDetailsModel | null = {
        id: "",
        customerId: "",
        name: "",
        userName: "",
        userPassword: "",
        userEmail: "",
        userMobile: "",
        userDOB: "",
        userAddress: "",
        userState: "",
        userCountry: "",
        userCitizenship: "",
        userCitizenStatus: "",
        userGender: "",
        userDocProof: "",
        userDocNo: "",
        userAccountType: "",
        userBranchNamne: "",
        userDepositAmount: "",
        userRegDate: "",
        userRefAccHolderName: "",
        userAccHolderAddress: "",
        userAccHolderNo: "",
        userGuardianType: "",
        userGuardianName: "",
        userMaritalStatus: "",
        updateCustomerError: ""
    }

    userPersonalLoans: PersonalLoan[] = [];
    userEducationLoans: EducationLoan[] = []    

    setLoggedInUserDetails(loggedInDetails: any)
    {
        this.userDetails.customerId = loggedInDetails.customerId;
        this.userDetails.isUserLoggedIn = loggedInDetails.customerId !== null || loggedInDetails.customerId !== undefined || loggedInDetails.customerId.length > 0 
        localStorage.setItem("hasUserData", this.userDetails.customerId)
        this.userDataEvent.emit(this.userDetails);
    }

    getLoggedInUserDetails()
    {
        return this.userDetails
    }

    setCustomerDetails(customerDetails: any)
    {
        if(customerDetails !== null && customerDetails !== undefined && this.customerDetails !== null)
        {
            this.customerDetails.id = customerDetails.id;
            this.customerDetails.customerId = customerDetails.customerId,
            this.customerDetails.name = customerDetails.name;
            this.customerDetails.userName = customerDetails.userName;
            this.customerDetails.userPassword = customerDetails.userPassword;
            this.customerDetails.userEmail = customerDetails.userEmail;
            this.customerDetails.userMobile = customerDetails.userMobile;
            this.customerDetails.userDOB = customerDetails.userDOB;
            this.customerDetails.userAddress = customerDetails.userAddress;
            this.customerDetails.userState = customerDetails.userState;
            this.customerDetails.userCountry = customerDetails.userCountry;
            this.customerDetails.userCitizenship = customerDetails.userCitizenship;
            this.customerDetails.userCitizenStatus = customerDetails.userCitizenStatus;
            this.customerDetails.userGender = customerDetails.userGender;
            this.customerDetails.userDocProof = customerDetails.userDocProof;
            this.customerDetails.userDocNo = customerDetails.userDocNo;
            this.customerDetails.userAccountType = customerDetails.userAccountType;
            this.customerDetails.userBranchNamne = customerDetails.userBranchNamne;
            this.customerDetails.userDepositAmount = customerDetails.userDepositAmount;
            this.customerDetails.userRegDate = customerDetails.userRegDate,
            this.customerDetails.userRefAccHolderName = customerDetails.userRefAccHolderName;
            this.customerDetails.userAccHolderAddress = customerDetails.userAccHolderAddress;
            this.customerDetails.userAccHolderNo = customerDetails.userAccHolderNo;
            this.customerDetails.userGuardianType = customerDetails.userGuardianType;
            this.customerDetails.userGuardianName = customerDetails.userGuardianName;
            this.customerDetails.userMaritalStatus = customerDetails.userMaritalStatus;
            this.customerDetails.updateCustomerError= customerDetails.updateCustomerError;
        }
        else
        {
            this.customerDetails = null;
        }
    }

    getCustomerDetails()
    {
        if(this.customerDetails)
        {
            return this.customerDetails;
        }
        else
        {
            return null
        }       
    }

    getUserPersonalLoan()
    {
        return this.userPersonalLoans;
    }

    setUserPersonalLoan(loans: PersonalLoan[])
    {
        loans.forEach(loan => {
             this.userPersonalLoans.push(loan);
        });

        return this.userPersonalLoans;
        
    }

    setUserEducationLoan(loans: EducationLoan[])
    {
        loans.forEach(loan => {
            this.userEducationLoans.push(loan);
       });

       return this.userEducationLoans;
    }

    getUserEducationLoan()
    {
        return this.userEducationLoans;
    }

    getUserHouseLoan()
    {
        return this.userPersonalLoans;
    }

    clearUserDeails()
    {
        this.userDetails = {
            userEmail: "",
            passWord: "",
            isUserLoggedIn: false,
            customerId: "",
            authenticationToken: "",
            signInError: ""
        } 

        this.userDataEvent.emit(this.userDetails);
    }

    clearCustomerDeails()
    {
        this.customerDetails = {
            id: "",
            customerId: "",
            name: "",
            userName: "",
            userPassword: "",
            userEmail: "",
            userMobile: "",
            userDOB: "",
            userAddress: "",
            userState: "",
            userCountry: "",
            userCitizenship: "",
            userCitizenStatus: "",
            userGender: "",
            userDocProof: "",
            userDocNo: "",
            userAccountType: "",
            userBranchNamne: "",
            userDepositAmount: "",
            userRegDate: "",
            userRefAccHolderName: "",
            userAccHolderAddress: "",
            userAccHolderNo: "",
            userGuardianType: "",
            userGuardianName: "",
            userMaritalStatus: "",
            updateCustomerError: ""
        } 
    }

    clearLocalStorage()
    {       
        localStorage.removeItem('hasUserData');
    }

    public userDataEvent = new EventEmitter<SignInModel>();

}