using Microsoft.EntityFrameworkCore;

namespace api.Model
{
    public class ApplicationDbContext : DbContext {
    
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> contextOptions): 
        base(contextOptions)
        {
            
        }

        public virtual DbSet<UserDetails> UserDetails{get;set;}
        public virtual DbSet<AccountDetails> AccountDetials{get;set;}
        public virtual DbSet<LoanDetails> LoanDetails{get;set;}
        public virtual DbSet<PersonalLoan> PersonalLoan{get;set;}
        public virtual DbSet<EducationLoan> EducationLoan{get;set;}

         protected override void OnModelCreating(ModelBuilder modelBuilder)
         {
             modelBuilder.Entity<UserDetails>(entity => {
                 entity.HasKey(e=> e.UserEmail);  
                 entity.ToTable("UserDetails");                 

                entity.Property(prop =>  prop.CustomerId);
                entity.Property(prop =>  prop.UserEmail);
                entity.Property(prop =>  prop.Password);
                entity.Property(prop =>  prop.Password);
             });

              modelBuilder.Entity<AccountDetails>(entity => {

                 entity.HasKey(e=> e.CustomerId);
                 entity.ToTable("AccountDetails");

                   entity.Property(prop =>  prop.Id);
                    entity.Property(prop =>  prop.CustomerId);
                    entity.Property(prop =>  prop.Name);
                     entity.Property(prop =>  prop.UserName);
                      entity.Property(prop =>  prop.UserName);
                       entity.Property(prop =>  prop.UserDOB);
                        entity.Property(prop =>  prop.UserDocNo);
                         entity.Property(prop =>  prop.UserDocProof);
                          entity.Property(prop =>  prop.UserGender);
                           entity.Property(prop =>  prop.UserGuardianName);
                            entity.Property(prop =>  prop.UserGuardianType);
                             entity.Property(prop =>  prop.UserMaritalStatus);
                              entity.Property(prop =>  prop.UserRegDate);
                               entity.Property(prop =>  prop.UserState);
                                entity.Property(prop =>  prop.UserRefAccHolderName);
                                 entity.Property(prop =>  prop.UserCitizenship);
                                  entity.Property(prop =>  prop.UserCitizenStatus);
                                   entity.Property(prop =>  prop.UserDepositAmount);
                                    entity.Property(prop =>  prop.UserCountry);
                                     entity.Property(prop =>  prop.UserCitizenStatus);
                                     entity.Property(prop =>  prop.UserAccHolderAddress);
                                     entity.Property(prop =>  prop.UserAccHolderNo);
                                     entity.Property(prop =>  prop.UserAccountType);
                                     entity.Property(prop =>  prop.UserAddress);
                                     entity.Property(prop =>  prop.UserBranchNamne);
             });

             modelBuilder.Entity<LoanDetails>(entity => {
                 entity.HasKey(key => key.LoanId);
                 entity.ToTable("LoanDetails");

                 entity.Property(prop => prop.LoanId);
                 entity.Property(prop => prop.CustomerId);
                 entity.Property(prop => prop.LoanAmount);
                 entity.Property(prop => prop.LoanType);
                 entity.Property(prop => prop.LoanApplyDate);
                 entity.Property(prop => prop.LoanIssueDate);
                 entity.Property(prop => prop.LoanDuration);
                 entity.Property(prop => prop.RateOfInterest);
             }); 

              modelBuilder.Entity<EducationLoan>(entity => {
                 entity.HasKey(key => key.LoanId);
                 entity.ToTable("EducationLoan");

                 entity.Property(prop => prop.LoanId);
                 entity.Property(prop => prop.Course);
                 entity.Property(prop => prop.CourseFee);
                 entity.Property(prop => prop.FatherCurrentExp);
                 entity.Property(prop => prop.FatherOccupation);
                 entity.Property(prop => prop.FatherTotalExp);
                 entity.Property(prop => prop.FatherName);
            
             });

              modelBuilder.Entity<PersonalLoan>(entity => {
                 entity.HasKey(key => key.LoanId);
                 entity.ToTable("PersonalLoan");

                 entity.Property(prop => prop.LoanId);
                 entity.Property(prop => prop.AnnualIncome);
                 entity.Property(prop => prop.CompanyName);
                 entity.Property(prop => prop.CurrentExperience);
                 entity.Property(prop => prop.Designation);
                 entity.Property(prop => prop.TotalExprience);
             });
         }
    }
}