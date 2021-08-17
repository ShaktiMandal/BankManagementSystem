using System.Threading.Tasks;
using api.Model;
using api.Repository;
using Microsoft.AspNetCore.Mvc;

namespace api.Controller
{

    [ApiController]
    [Route("Account")]
    public class CustomerController : ControllerBase {

        private IApiRepository apiRepository;
        private ApplicationDbContext applicationDbContext;

        public CustomerController(ApplicationDbContext context,  IApiRepository repository)
        {
            apiRepository = repository;
            applicationDbContext = context;
            apiRepository.AppDbContext = applicationDbContext;
        }

        [HttpPost]
        [Route("createaccount")]
        public async Task<ActionResult<CreateAccountResponse>> CreateAccountAsync(CreateAccountRequest request)
        {
           var user = await apiRepository.CreateAccountAsync(request);
           return Ok(user);
        }

        [HttpPost]
        [Route("updateaccount")]
        public async Task<ActionResult<UpdateAccountResponse>> UpdateAccountAsync(UpdateAccountRequest request)
        {
           var account = await apiRepository.UpdateAccountAsync(request);
           return Ok(account);
        }

        [HttpGet("{customerId}")]
        public async Task<ActionResult<AccountDetailsResponse>> GetAccountAsync(string customerId)
        {           
           var user = await apiRepository.GetAccountDetails(customerId);
           if(user != null)
           {
                return Ok(user);
           }

           return NotFound();           
        }

        [HttpPost]
        [Route("applyLoan")]
        public async Task<ActionResult<LoanResponse>> ApplyLoanAsync(LoanRequest request)
        {           
           var loan = await apiRepository.ApplyLoan(request);
           return Ok(loan);
        }
    }
}