using System;
using System.ComponentModel.DataAnnotations;

namespace api.Model
{
    public class SignInRequest
    {
        private string userEmail;
        private string password;
        
        [Required]
        public string UserEmail
        {
            get { return userEmail; }
            set { userEmail = value; }
        }

        [Required]
        public string Password
        {
            get { return password; }
            set { password = value; }
        }   
    }
}