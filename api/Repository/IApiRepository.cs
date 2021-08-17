using System.Threading.Tasks;
using api.Model;

namespace api.Repository
{
    public interface IApiRepository {
        public ApplicationDbContext AppDbContext {get;set;}      
        public Task<SignInResponse> AuthenticateUserAsync(SignInRequest request);
        public Task<ResetPasswordResponse> ResetPasswordAsync(ResetPasswordRequest request);
        public Task<CreateAccountResponse> CreateAccountAsync(CreateAccountRequest request);
        public Task<UpdateAccountResponse> UpdateAccountAsync(UpdateAccountRequest request);
        public Task<AccountDetailsResponse> GetAccountDetails(string request);
        public Task<LoanResponse> ApplyLoan(LoanRequest request);
    }
}