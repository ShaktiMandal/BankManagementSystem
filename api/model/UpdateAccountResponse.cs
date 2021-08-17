namespace api.Model
{
    public class UpdateAccountResponse: UpdateAccountRequest{
        public string Error {get;set;}
        public bool Success {get;set;}

        public AccountDetails AccountDetails {get;set;}
    }
}