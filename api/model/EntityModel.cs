using System;

namespace api.Model
{
  public class EntityModel
  {
    private Guid itemId;

    public Guid ItemId
      {
          get { return itemId; }
          set { itemId = value; }
      }    
  }
}