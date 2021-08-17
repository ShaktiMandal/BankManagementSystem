export interface LoanModel {
    loanId : number,
    loanType: string,
    loanAmount: number
}


export interface LoanDetails {
    customerId: string,
    loanType : string,
    loanAmount: string,
    loanApplyDate: string,
    loanIssueDate: string,
    rateOfInterest: string,
    loanDuration: string,
    personalLoan: PersonalLoan,
    educationLoan: EducationLoan,
    personalLoans: PersonalLoan[],
    educationLoans: EducationLoan[],
    applyLoanError: string,
    isLoanApplied: boolean
}

export interface PersonalLoan {
    annualPersonalIncome: string,
    companyName: string,
    designation: string,
    employeeTotaleExp: string,
    expCurrentCompany: string,

}

export interface EducationLoan {
    courseFee: string,
    course: string,
    fatherName: string,
    fatherOccupation: string,
    fatherTotalExp: string,
    fatherTotalCurrentExp: string,
    rationCardNo: string,
    annualIncome: string,

}