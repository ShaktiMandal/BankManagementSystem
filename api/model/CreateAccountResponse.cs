using System;
using System.ComponentModel.DataAnnotations;

namespace api.Model
{    
  public class CreateAccountResponse : BaseResponse
  {
    private  string customerId;
    private  string id;
    public string CustomerId
      {
          get { return customerId; }
          set { customerId = value; }
      }
    public string Id
      {
          get { return id; }
          set { id = value; }
      }
  }
}