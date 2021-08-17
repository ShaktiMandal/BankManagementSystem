using System.Collections.Generic;

namespace api.Model
{
    public class LoanResponse : BaseLoanDetails{
        public string Error {get;set;}
        public bool Success {get;set;}
        public ICollection<PersonalLoan> PersonalLoans {get;set;}
        public ICollection<EducationLoan> EducationLoans {get;set;}
    }
}