namespace api.Model
{
    

public record ResetPasswordResponse{

  private  bool success;
  private string error;

   public bool Success
    {
        get { return success; }
        set { success = value; }
    }

    public string Error
    {
        get { return error; }
        set { error = value; }
    }  
}
}