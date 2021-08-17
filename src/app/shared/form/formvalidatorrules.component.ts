import { AbstractControl, FormControl, ValidatorFn, Validators } from "@angular/forms";

 export class FormValidatorRules {
    emailRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.email, Validators.minLength(10)];
    passwordRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@#$%^&-+=()]).{8}/)];
    confPasswordRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@#$%^&-+=()]).{8}/), this.passwordMismatchValidator.bind(this)];
    nameRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/^([a-zA-Z\s]+)/)];
    userNameRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.minLength(4), Validators.pattern(/^[0-9a-zA-Z]+$/)]
    userMobileRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/^[6-9]\d{9}/)]
    userDOBRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.nullValidator, this.AgeLimitValidator.bind(this)]
    userAdressRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userStateRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userCountryRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userCitizenshipRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userCitizenStatusRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userGenderRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userDocProofRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userDocNoRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userAccountTypeRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userBranchNamneRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userDepositAmountRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/(?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$|)/), this.SetDepositAmountValidator.bind(this)]
    userRegDateRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, this.ValidateRegDate.bind(this)]
    userAccHolderNo: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userRefAccHolderNameRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userAccHolderAddressRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userGuardianTypeRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userGuardianNameRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userMaritalStatusRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userloanTypeRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userloanAmountRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/(?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$|)/), this.SetDepositAmountValidator.bind(this)]
    userloanApplyDateRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userloanIssueDateRule: ValidatorFn | ValidatorFn[] | null = [Validators.required]
    userrateOfInterestRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/(?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$|)/), this.SetDepositAmountValidator.bind(this)]
    userloanDurationRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/(?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$|)/), this.SetDepositAmountValidator.bind(this)]
    usercourseFeeRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/(?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$|)/), this.SetDepositAmountValidator.bind(this)]
    usercourseRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/^([a-zA-Z\s]+)/)]
    userfatherNameRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/^([a-zA-Z\s]+)/)]
    userfatherOccupationRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/^([a-zA-Z\s]+)/)]
    userfatherTotalExpRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/(?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$|)/), this.SetDepositAmountValidator.bind(this)]
    userfatherTotalCurrentExpRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/(?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$|)/), this.SetDepositAmountValidator.bind(this)]
    userrationCardNoRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/^([a-zA-Z0-9]){8,12}\s*$/)]
    userannualIncomeRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/(?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$|)/), this.SetDepositAmountValidator.bind(this)]
    userannualPersonalIncomeRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/(?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$|)/), this.SetDepositAmountValidator.bind(this)]
    usercompanyNameRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/^([a-zA-Z\s]+)/)]
    userdesignationRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/^([a-zA-Z\s]+)/)]
    useremployeeTotaleExpRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/(?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$|)/), this.SetDepositAmountValidator.bind(this)]
    userexpCurrentCompanyRule: ValidatorFn | ValidatorFn[] | null = [Validators.required, Validators.pattern(/(?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$|)/), this.SetDepositAmountValidator.bind(this)]
  
    rules = new Map<string, ValidatorFn | ValidatorFn[] | null>();    
    
    constructor()
    {
        this.rules.set("userEmail", this.emailRule);
        this.rules.set("userPassword", this.passwordRule);
        this.rules.set("confPassword", this.confPasswordRule);
        this.rules.set("name", this.nameRule);
        this.rules.set("userName", this.userNameRule);
        this.rules.set("userMobile", this.userMobileRule);
        this.rules.set("userDOB", this.userDOBRule);
        this.rules.set("userAddress", this.userAdressRule);
        this.rules.set("userState", this.userStateRule);
        this.rules.set("userCountry", this.userCountryRule);
        this.rules.set("userCitizenship", this.userCitizenshipRule);
        this.rules.set("userCitizenStatus", this.userCitizenStatusRule);
        this.rules.set("userGender", this.userGenderRule);
        this.rules.set("userDocProof", this.userDocProofRule);
        this.rules.set("userDocNo", this.userDocNoRule);
        this.rules.set("userAccountType", this.userAccountTypeRule);
        this.rules.set("userBranchNamne", this.userBranchNamneRule);
        this.rules.set("userDepositAmount", this.userDepositAmountRule);
        this.rules.set("userRegDate", this.userRegDateRule);
        this.rules.set("userAccHolderNo", this.userAccHolderNo);
        this.rules.set("userRefAccHolderName", this.userRefAccHolderNameRule);
        this.rules.set("userAccHolderAddress", this.userAccHolderAddressRule);
        this.rules.set("userGuardianType", this.userGuardianTypeRule);
        this.rules.set("userGuardianName", this.userGuardianNameRule);
        this.rules.set("userMaritalStatus", this.userMaritalStatusRule);
        this.rules.set("loanType", this.userloanTypeRule);
        this.rules.set("loanAmount", this.userloanAmountRule);
        this.rules.set("loanApplyDate", this.userloanApplyDateRule);
        this.rules.set("loanIssueDate", this.userloanIssueDateRule);
        this.rules.set("rateOfInterest", this.userrateOfInterestRule);
        this.rules.set("loanDuration", this.userloanDurationRule);
        this.rules.set("courseFee", this.usercourseFeeRule);
        this.rules.set("course", this.usercourseRule);
        this.rules.set("fatherName", this.userfatherNameRule);
        this.rules.set("fatherOccupation", this.userfatherOccupationRule);
        this.rules.set("fatherTotalExp", this.userfatherTotalExpRule);
        this.rules.set("fatherTotalCurrentExp", this.userfatherTotalCurrentExpRule);
        this.rules.set("rationCardNo", this.userrationCardNoRule);
        this.rules.set("annualIncome", this.userannualIncomeRule);
        this.rules.set("annualPersonalIncome", this.userannualPersonalIncomeRule);
        this.rules.set("companyName", this.usercompanyNameRule);
        this.rules.set("designation", this.userdesignationRule);
        this.rules.set("employeeTotaleExp", this.useremployeeTotaleExpRule);
        this.rules.set("expCurrentCompany", this.userexpCurrentCompanyRule);
    }

    GetParentControl(control: AbstractControl): AbstractControl | null{

        if(control.parent === null)
        {
            return null;
        }

        return control.parent;
    }

    SetDepositAmountValidator(amountValidator: AbstractControl) : {[key: string]: boolean} | null
    {
        var parentControl = this.GetParentControl(amountValidator);
        if(parentControl !== null)
        {
            var amountControl = parentControl.get("userDepositAmount");          
            if(amountControl && amountControl.value )
            {
                var amount = parseFloat(amountControl.value);

                if(amount <= 0)
                {
                    return {
                        'isInvalidAmount' :  true                 
                    }
                }
            }
        }

        return null;
    }

    passwordMismatchValidator(confPasswordCrtl: AbstractControl) : {[key: string]: boolean} | null
    {    
        var parentControl = this.GetParentControl(confPasswordCrtl);
        if(parentControl !== null)
        {
            var password = parentControl.get('userPassword');
            var confPassword = parentControl.get('confPassword');

            if(password && confPassword)
            {
                if(password.value !== confPassword.value)
                {
                    return {
                        'isPasswordMismatched' :  true                 
                    }
                }
            }
        }
        return null;        
    }

    AgeLimitValidator(confPasswordCrtl: AbstractControl) : {[key: string]: boolean} | null
    {
        var parentControl = this.GetParentControl(confPasswordCrtl);
        if(parentControl !== null)
        {
            var dob = parentControl.get('userDOB'); 
            if(dob)
            {
                var selectedDate = new Date(dob.value);                
                var monthDiff = Date.now() - selectedDate.getTime();
                var updatedDate = new Date(monthDiff);
                var updatedYear = updatedDate.getUTCFullYear();
                var calculatedAge = Math.abs(updatedYear - 1970);
             
                if(calculatedAge <= 18 || calculatedAge >= 96 )
                {
                    return {
                        'isDobInvalid' :  true                 
                    }
                }

                this.updateCitizenshipStatusBasedOnDOB(parentControl, calculatedAge);              
            }
        }
        return null;
    }

    ValidateRegDate(regDateCrtl: AbstractControl) : {[key: string]: boolean} | null
    {
        var parentControl = this.GetParentControl(regDateCrtl);
        if(parentControl !== null)
        {
            var regDate = parentControl.get('userRegDate'); 
            if(regDate !== null)
            {
                var value = regDate.value;
                var selectedDate = new Date(value);   
                var previousDay = new Date();
                previousDay.setDate(previousDay.getDate() - 1);
                if( selectedDate <= previousDay )
                {
                    return {
                        'isRegDateInValid' :  true                 
                    }
                }
            }
          
        }

        return null;
    }

    updateCitizenshipStatusBasedOnDOB(parentControl: AbstractControl, calculatedAge: number): void {
        var citizenStatus = parentControl.get('userCitizenStatus'); 
        if(citizenStatus)
        {
            if(calculatedAge < 18)
            {
                citizenStatus.setValue("Minor");
            }
            
            if(calculatedAge > 18)
            {
                citizenStatus.setValue("Normal");
            }
            
            if(calculatedAge > 60){
                citizenStatus.setValue("Senior");
            }
            citizenStatus?.updateValueAndValidity();
        }
     
    }
}


