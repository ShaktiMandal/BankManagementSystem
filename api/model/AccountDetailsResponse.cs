using System.Collections.Generic;

namespace api.Model
{
    public class AccountDetailsResponse{
        public string Error {get;set;}
        public bool Success {get;set;}
        public AccountDetails AccountDetails {get;set;}
        public ICollection<LoanDetails> Loans {get;set;}
    }
}