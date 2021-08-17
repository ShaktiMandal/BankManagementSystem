using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Model;
using MongoDB.Driver;

namespace api.Repository
{
    public class ApiRepository : IApiRepository
    {
        public ApiRepository()
        {
            
        }
        public ApplicationDbContext AppDbContext {get;set;}
        public async Task<SignInResponse> AuthenticateUserAsync(SignInRequest request)
        {
           var users = await AppDbContext.UserDetails.FindAsync(request.UserEmail);
            if(users != null)
            {
                var response = new SignInResponse();
               
                    bool isPasswordMatched = users.Password == request.Password;
                    if(isPasswordMatched)
                    {
                        response.UserEmail = users.UserEmail;
                        response.Password = users.Password;
                        response.ConfirmPassword = users.ConfirmPassword;
                        response.CustomerId = users.CustomerId;
                        response.Success = true;
                        return await Task.FromResult(response);
                    }
                    else
                    {
                        response.Success = true;
                        response.Error = "Invalid Password";
                        return await Task.FromResult(response);
                    }
                
            }
            else
            {
                return await Task.FromResult(new SignInResponse(){ Success = false, Error = "User deos not exists"});
            }
    }

        private async Task<UserDetails> GetUser(string UserEmail)
        {
            var user = await AppDbContext.UserDetails.FindAsync(UserEmail);
            return user;
        }

        public async Task<ResetPasswordResponse> ResetPasswordAsync(ResetPasswordRequest request)
        {
            var user = await AppDbContext.UserDetails.FindAsync(request.UserEmail);
            if(user != null)
            {
                user.Password = request.Password;
                user.ConfirmPassword = request.ConfirmPassword;
               
                AppDbContext.UserDetails.Update(user);
                AppDbContext.SaveChanges();

                return await Task.FromResult(new ResetPasswordResponse(){
                    Error = "",
                    Success = true
                });
            }

             return await Task.FromResult(new ResetPasswordResponse(){
                    Error = "Unable to find the user",
                    Success = true
                });
        }
        public async Task<CreateAccountResponse> CreateAccountAsync(CreateAccountRequest request)
        {   
            var matchedUser = await AppDbContext.UserDetails.FindAsync(request.UserEmail);         
           
            if(matchedUser ==  null)
            {                            
                var userDetails = new UserDetails(){
                    UserEmail = request.UserEmail,   
                    Password = request.UserPassword,
                    ConfirmPassword = request.UserPassword,                
                    CustomerId = GenerateCustomerId()
                };

                await AppDbContext.UserDetails.AddAsync(userDetails);
                await AppDbContext.SaveChangesAsync();

                var accountDetails = new AccountDetails(){
                    CustomerId = userDetails.CustomerId,
                    Id = new Random().Next().ToString(),
                    Name = request.Name,                 
                    UserAccHolderAddress = request.UserAccHolderAddress,
                    UserAccountType = request.UserAccountType,
                    UserAddress = request.UserAddress,
                    UserBranchNamne = request.UserBranchNamne,
                    UserCitizenship = request.UserCitizenship,
                    UserCitizenStatus = request.UserCitizenStatus,
                    UserCountry = request.UserCountry,
                    UserDepositAmount = request.UserDepositAmount,
                    UserDOB = request.UserDOB,
                    UserDocNo = request.UserDocNo,
                    UserDocProof = request.UserDocProof,
                    UserEmail = request.UserEmail,
                    UserGender = request.UserGender,
                    UserGuardianName = request.UserGuardianName,
                    UserGuardianType = request.UserGuardianType,
                    UserMaritalStatus = request.UserMaritalStatus,
                    UserMobile = request.UserMobile,
                    UserName = request.UserName,
                    UserRefAccHolderName = request.UserRefAccHolderName,
                    UserAccHolderNo = request.UserAccHolderNo,
                    UserRegDate = request.UserRegDate,
                    UserState = request.UserState

                };

                await AppDbContext.AccountDetials.AddAsync(accountDetails);
                await AppDbContext.SaveChangesAsync();
                
                return new CreateAccountResponse() 
                {
                    Id = accountDetails.Id,
                    CustomerId = userDetails.CustomerId, 
                    Error="", 
                    Success= true
                };
            }
            else
            {                 
                return new CreateAccountResponse() 
                {
                    Id = "",
                    CustomerId = "", 
                    Error="User already exists. Please user different email",
                    Success= true
                };
            }
        }

        public string GenerateCustomerId()
        {
            var randomNumber = new Random().NextDouble() * 1000;
            return "R-" + randomNumber.ToString().Substring(0, 3);
        }

        public async Task<UpdateAccountResponse> UpdateAccountAsync(UpdateAccountRequest request)
        {
            var response = new UpdateAccountResponse();
            var accountDetails = await AppDbContext.AccountDetials.FindAsync(request.CustomerId);
            if(accountDetails != null)
            {
                accountDetails.Name = request.Name;
                accountDetails.UserAccHolderAddress = request.UserAccHolderAddress;
                accountDetails.UserAccountType = request.UserAccountType;
                accountDetails.UserAddress = request.UserAddress;
                accountDetails.UserBranchNamne = request.UserBranchNamne;
                accountDetails.UserCitizenship = request.UserCitizenship;
                accountDetails.UserCitizenStatus = request.UserCitizenStatus;
                accountDetails.UserCountry = request.UserCountry;
                accountDetails.UserDepositAmount = request.UserDepositAmount;
                accountDetails.UserDOB = request.UserDOB;
                accountDetails.UserDocNo = request.UserDocNo;
                accountDetails.UserDocProof = request.UserDocProof;               
                accountDetails.UserGender = request.UserGender;
                accountDetails.UserGuardianName = request.UserGuardianName;
                accountDetails.UserGuardianType = request.UserGuardianType;
                accountDetails.UserMaritalStatus = request.UserMaritalStatus;
                accountDetails.UserMobile = request.UserMobile;
                accountDetails.UserName = request.UserName;
                accountDetails.UserRefAccHolderName = request.UserRefAccHolderName;
                accountDetails.UserAccHolderNo = request.UserAccHolderNo;
                accountDetails.UserRegDate = request.UserRegDate;
                accountDetails.UserState = request.UserState;

                AppDbContext.AccountDetials.Update(accountDetails);
                AppDbContext.SaveChanges();
             
                response.AccountDetails = accountDetails;

                response.Success = true;
                response.Error ="";
            }
            else
            {
                response.Success = true;
                response.Error ="There is no such account found";
                response.AccountDetails = new AccountDetails();
            }

            return response;
        }
        public async Task<AccountDetailsResponse> GetAccountDetails(string request)
        {
            var response = new AccountDetailsResponse();
            response.AccountDetails = new AccountDetails();
            response.Loans = new List<LoanDetails>();

            var account =  await AppDbContext.AccountDetials.FindAsync(request);
            if(account != null)
            {
                response.Success = true;
                response.Error = "";
                response.AccountDetails = account;
                SetLoanDetails(response, account.CustomerId);               
            }
            else
            {
                response.Success = true;
                response.Error = "There is no such customer";                
            }

            return response;
        }

        public void SetLoanDetails(AccountDetailsResponse response, string customerId)
        {
            var loanDetails = AppDbContext.LoanDetails.Where(loanItem => loanItem.CustomerId == customerId).ToList();
            if(loanDetails != null)
            {
                   loanDetails.ForEach(eachLoan => {
                        response.Loans.Add(eachLoan);
                   });
            }               
        }

        public async Task<LoanResponse> ApplyLoan(LoanRequest request)
        {
            var loanType =  request.LoanType;
            if(loanType == "Personal Loan" || loanType == "House Loan")
            {
                var loanDetails = new LoanDetails() {
                    CustomerId = request.CustomerId,
                    LoanAmount = request.LoanAmount,
                    LoanApplyDate = request.LoanApplyDate,
                    LoanId = new Random().Next().ToString(),
                    LoanDuration = request.LoanDuration,
                    LoanIssueDate = request.LoanIssueDate,
                    LoanType = loanType,
                    RateOfInterest = request.RateOfInterest
                };
                await AppDbContext.LoanDetails.AddAsync(loanDetails);
                await AppDbContext.PersonalLoan.AddAsync(new PersonalLoan() {

                    AnnualIncome = request.PersonalLoan.AnnualIncome,
                        CompanyName = request.PersonalLoan.CompanyName,
                    CurrentExperience = request.PersonalLoan.CurrentExperience,
                    Designation = request.PersonalLoan.Designation,
                    TotalExprience = request.PersonalLoan.TotalExprience,
                    LoanId = loanDetails.LoanId
                });

                AppDbContext.SaveChanges();
                
            }

            if(loanType == "Education Loan")
            {
                var loanDetails = new LoanDetails() {
                    CustomerId = request.CustomerId,
                    LoanAmount = request.LoanAmount,
                    LoanApplyDate = request.LoanApplyDate,
                    LoanId = new Random().Next().ToString(),
                    LoanDuration = request.LoanDuration,
                    LoanIssueDate = request.LoanIssueDate,
                    LoanType = loanType,
                    RateOfInterest = request.RateOfInterest
                };
                await AppDbContext.LoanDetails.AddAsync(loanDetails);
                await AppDbContext.EducationLoan.AddAsync(new EducationLoan() {
                    Course = request.EducationLoan.Course,
                    CourseFee = request.EducationLoan.CourseFee,
                    FatherCurrentExp = request.EducationLoan.FatherCurrentExp,
                    FatherName = request.EducationLoan.FatherName,
                    FatherOccupation = request.EducationLoan.FatherOccupation,
                    FatherTotalExp = request.EducationLoan.FatherTotalExp,
                    LoanId = loanDetails.LoanId
                });

                AppDbContext.SaveChanges();
                
            }

            var response = new LoanResponse();

            var loanList = AppDbContext.LoanDetails.Where(loan => loan.CustomerId.Equals(request.CustomerId)).ToList();
            if(loanList != null )
            {
                var personalLoans = loanList.Where(loan => loan.LoanType.Contains("Personal") || loan.LoanType.Contains("House")).ToList();

                if(personalLoans != null)
                {
                    response.PersonalLoans = new List<PersonalLoan>();
                    personalLoans.ForEach(loan => {

                        var matchedLoan = AppDbContext.PersonalLoan.Find(loan.LoanId);
                        if(matchedLoan != null)
                        {
                            response.PersonalLoans.Add(matchedLoan);
                        }
                        
                    });
                }

                var educationLoans = loanList.Where(loan => loan.LoanType.Contains("Education")).ToList();
                if(educationLoans != null)
                {
                    response.EducationLoans = new List<EducationLoan>();
                    educationLoans.ForEach(loan => {

                        var matchedLoan = AppDbContext.EducationLoan.Find(loan.LoanId);
                        if(matchedLoan != null)
                        {
                            response.EducationLoans.Add(matchedLoan);
                        }
                        
                    });
                }
                
                response.Success = true;
                response.Error = "";

                return response;
            }
            else
            {
                response.Success = true;
                response.Error = "There is no loan for this customer, please apply loan";
                return response;
            }
        }
    }
}