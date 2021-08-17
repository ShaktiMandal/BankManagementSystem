using System.ComponentModel.DataAnnotations;


namespace api.Model
{
    

public record ResetPasswordRequest{
    private string userEmail;
    private string password;
    private string confirmPassword;

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

    [Required]
    public string ConfirmPassword
    {
        get { return confirmPassword; }
        set { confirmPassword = value; }
    }
}
}