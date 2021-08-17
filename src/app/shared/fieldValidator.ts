
export function GetErrorMessage(field: string ): string {

    switch(field)
    {
        case "userEmail" :
            {
                return "Please enter valid email";
            }
        case "userPassword" :
            {
                return "Please enter valid password";
            }
        case "confPassword":
            {
                return "Confirm password and password should be same";
            }
        case "name":
            {
                return "Please enter valid name";
            }
        case "userName" :
            {
                return "Please enter valid username";
            }
        case "userMobile" :
            {
                return "Please enter valid mobile";
            }
        case "userDOB" :
            {
                return "Please enter valid date Of birth";
            }
        case "userAddress":
            {
                return "Please enter valid address";
            }
        case "userState" :
            {
                return "Please enter valid state";
            }
        case "userCountry" :
            {
                return "Please enter valid country";
            }
        case "userCitizenship" :
            {
                return "Please enter valid citizenship";
            }
        case "userCitizenStatus" :
            {
                return "Please enter valid citizenship status";
            }
        case "userGender" :
            {
                return "Please enter valid gender";
            }
        case "userDocProof" :
            {
                return "Please enter valid doc prrof";
            }
        case "userDocNo" :
            {
                return "Please enter valid doc number";
            }
        case "userAccountType" :
            {
                return "Please enter valid accoun type";
            }
        case "userBranchNamne" :
            {
                return "Please enter valid branch name";
            }
        case "userDepositAmount" :
            {
                return "Please enter valid deposit amount";
            }
        case "userRegDate" :
            {
                return "Please enter valid regitration date";
            }
        case "userAccHolderNo" :
            {
                return "Please enter valid acc holder number";
            }
        case "userRefAccHolderName" :
            {
                return "Please enter valid acc holder name";
            }
        case "userAccHolderAddress" :
            {
                return "Please enter valid acc holder address";
            }
        case "userGuardianType" :
            {
                return "Please enter valid guarduian type";
            }
        case "userGuardianName" :
            { 
                return "Please enter valid guardian name";
            }
        case "userMaritalStatus" :
            {
                return "Please enter valid marital status";
            }
        case "loanType" :
            {
                return "Please enter valid loan type";
            }
        case "loanAmount" :
            {
                return "Please enter valid loan amount";
            }
        case "loanApplyDate" :
            {
                return "Please enter valid loan applydate";
            }
        case "loanIssueDate" :
            {
                return "Please enter valid issue date";
            }
        case "rateOfInterest" :
            {
                return "Please enter valid interest rate";
            }
        case "loanDuration" :
            {
                return "Please enter valid loan duration";
            }
        case "courseFee" :
            {
                return "Please enter valid course fees";
            }
        case "course" :
            {
                return "Please enter valid course";
            }
        case "fatherName" :
            {
                return "Please enter valid father name";
            }
        case "fatherOccupation" :
            {
                return "Please enter valid occupation";
            }
        case "fatherTotalExp" :
            {
                return "Please enter valid experience";
            }
        case "fatherTotalCurrentExp" :
            {
                return "Please enter valid current experience";
            }
        case "rationCardNo" :
            {
                return "Please enter valid ration card number";
            }
        case "annualIncome" :
            {
                return "Please enter valid anual income";
            }
        case "annualPersonalIncome" :
            {
                return "Please enter valid anual income";
            }
        case "companyName" :
            {
                return "Please enter valid company name";
            }
        case "designation" :
            {
                return "Please enter valid designation";
            }
        case "employeeTotaleExp" :
            {
                return "Please enter valid total exp";
            }
        case "expCurrentCompany" :
            {
                return "Please enter valid current exp";
            }
        default: 
        {
            return "";
        }
    }
}