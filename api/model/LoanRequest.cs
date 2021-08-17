using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using api.Model;

namespace api.Model
{
    public class LoanRequest : BaseLoanDetails{
 
        public PersonalLoan PersonalLoan {get;set;}
        public EducationLoan EducationLoan {get;set;}
    }
}