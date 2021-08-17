using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using api.Model;
using api.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Controller
{
    [ApiController]
    [Route("Authenticate")]
    public class AuthController : ControllerBase
    {
        private IApiRepository apiRepository;
        private ApplicationDbContext applicationDbContext;
        public AuthController(ApplicationDbContext context,  IApiRepository repository)
        {
            apiRepository = repository;
            applicationDbContext = context;
            apiRepository.AppDbContext = applicationDbContext;
            
        }

        [HttpPost]
        [Route("signin")]
        public async Task<ActionResult<SignInResponse>> AuthenticateUserAsync(SignInRequest request)
        {
           var user = await apiRepository.AuthenticateUserAsync(request);
            return Ok(user);
        }    

        [HttpPost]
        [Route("resetPassword")]
        public async Task<ActionResult<ResetPasswordResponse>> ResetPasswordAsync(ResetPasswordRequest request)
        {
           var user = await apiRepository.ResetPasswordAsync(request);
            return Ok(user);
        }       
    }
}