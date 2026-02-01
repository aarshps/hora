using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Hora.Db.Ef.Entities;
using Hora.Db.Ef.Repositories;

namespace Hora.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimeController : ControllerBase
    {
        private readonly ITimeRepository _repository;

        public TimeController(ITimeRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("server")]
        public ActionResult<DateTime> GetServerTime()
        {
            return DateTime.UtcNow;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Time>> Get()
        {
            return Ok(_repository.GetAllTimes());
        }

        [HttpPost]
        public ActionResult<Time> Post([FromBody] Time time)
        {
            if (time == null) return BadRequest();
            var addedTime = _repository.AddTime(time);
            return CreatedAtAction(nameof(Get), new { id = addedTime.TimeId }, addedTime);
        }
    }
}
