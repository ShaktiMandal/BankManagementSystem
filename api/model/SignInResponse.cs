namespace api.Model
{
    public class SignInResponse : UserDetails {
        public string UserToken{get;set;}
        public bool Success {get;set;}
        public string Error {get;set;}
    }
}