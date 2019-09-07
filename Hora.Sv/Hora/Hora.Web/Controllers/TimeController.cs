using Microsoft.AspNetCore.Mvc;
using System;

namespace Hora.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimeController : ControllerBase
    {
        [HttpGet]
        public ActionResult<DateTime> Get()
        {
            return DateTime.UtcNow;
        }
    }
}
