using System;
using System.ComponentModel.DataAnnotations;

namespace api.Model
{
    public class AccountDetails {    
          public string Id {get;set;}
          [Required]
          public string CustomerId {get;set;}
          [Required]
          public string UserEmail {get;set;}           
          [Required]
          public string Name {get;set;}
          [Required]
          public string UserName {get;set;}
          [Required]
          public long UserMobile {get;set;}
          [Required]

          public string UserDOB {get;set;}
          [Required]
          public string UserAddress {get;set;}
          [Required]
          public string UserState {get;set;}
          [Required]
          public string UserCountry {get;set;}
          [Required]
          public string UserCitizenship {get;set;}
          [Required]
          public string UserCitizenStatus {get;set;}
          [Required]
          public string UserGender {get;set;}
          [Required]
          public string UserDocProof {get;set;}
          [Required]
          public string UserDocNo {get;set;}
          [Required]
          public string UserAccountType {get;set;}
          [Required]
          public string UserBranchNamne {get;set;}
          [Required]
          public string UserDepositAmount {get;set;}
          [Required]
          public string UserRegDate {get;set;}
          [Required]
          public string UserRefAccHolderName {get;set;}

          [Required]
          public string UserAccHolderAddress {get;set;}

          [Required]
          public string UserAccHolderNo {get;set;}

          [Required]
          public string UserGuardianType {get;set;}
          [Required]
          public string UserGuardianName {get;set;}
          [Required]
          public string UserMaritalStatus {get;set;}
    }
}