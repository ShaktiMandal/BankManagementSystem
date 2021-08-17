using System.ComponentModel.DataAnnotations;

namespace api.Model
{
    public class BaseLoanDetails {
             [Required]
        public string CustomerId {get;set;}
    
         [Required]
        public string LoanType {get;set;}
    
         [Required]
        public string LoanAmount {get;set;}
    
         [Required]
        public string LoanApplyDate {get;set;}
    
         [Required]
        public string LoanIssueDate {get;set;}
    
         [Required]
        public string RateOfInterest {get;set;}
    
         [Required]
        public string LoanDuration {get;set;}
    }
}