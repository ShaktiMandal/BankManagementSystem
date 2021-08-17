using System.ComponentModel.DataAnnotations;

namespace api.Model
{
    public class UserDetails{

        [Required]
        public string UserEmail{get;set;}
        [Required]
        public string Password {get;set;}
        [Required]
        public string ConfirmPassword {get;set;}
        [Required]
        public string CustomerId {get;set;}
       
    }
}