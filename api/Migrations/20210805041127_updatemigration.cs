using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class updatemigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AccountDetails",
                columns: table => new
                {
                    CustomerId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Id = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserMobile = table.Column<long>(type: "bigint", nullable: false),
                    UserDOB = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserState = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserCountry = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserCitizenship = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserCitizenStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserGender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserDocProof = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserDocNo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAccountType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserBranchNamne = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserDepositAmount = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserRegDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserRefAccHolderName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAccHolderAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAccHolderNo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserGuardianType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserGuardianName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserMaritalStatus = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountDetails", x => x.CustomerId);
                });

            migrationBuilder.CreateTable(
                name: "EducationLoan",
                columns: table => new
                {
                    LoanId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CourseFee = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Course = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FatherName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FatherOccupation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FatherTotalExp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FatherCurrentExp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EducationLoan", x => x.LoanId);
                });

            migrationBuilder.CreateTable(
                name: "LoanDetails",
                columns: table => new
                {
                    LoanId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CustomerId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LoanType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LoanAmount = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LoanApplyDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LoanIssueDate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RateOfInterest = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LoanDuration = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LoanDetails", x => x.LoanId);
                });

            migrationBuilder.CreateTable(
                name: "PersonalLoan",
                columns: table => new
                {
                    LoanId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    AnnualIncome = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CompanyName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Designation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TotalExprience = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CurrentExperience = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonalLoan", x => x.LoanId);
                });

            migrationBuilder.CreateTable(
                name: "UserDetails",
                columns: table => new
                {
                    UserEmail = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConfirmPassword = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CustomerId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserDetails", x => x.UserEmail);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AccountDetails");

            migrationBuilder.DropTable(
                name: "EducationLoan");

            migrationBuilder.DropTable(
                name: "LoanDetails");

            migrationBuilder.DropTable(
                name: "PersonalLoan");

            migrationBuilder.DropTable(
                name: "UserDetails");
        }
    }
}
