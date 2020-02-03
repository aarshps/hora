using Hora.Db.Ef.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace Hora.Db.Ef.Repositories
{
    public class TimeRepository : ITimeRepository
    {
        public readonly HoraDbContext _horaDbContext;

        public TimeRepository(HoraDbContext dbContext)
        {
            _horaDbContext = dbContext;
        }

        public Time AddTime(Time time)
        {
            _horaDbContext.Add(time);
            _horaDbContext.SaveChanges();
            return time;
        }

        public Time DeleteTimeById(int timeId)
        {
            var time = _horaDbContext.Times.Find(timeId);
            if (time != null)
            {
                _horaDbContext.Times.Remove(time);
                _horaDbContext.SaveChanges();
            }
            return time;
        }

        public IEnumerable<Time> GetAllTimes()
        {
            return _horaDbContext.Times;
        }

        public Time GetTimeById(int timeId)
        {
            return _horaDbContext.Times.Find(timeId);
        }

        public Time UpdateTime(Time timeChanges)
        {
            var time = _horaDbContext.Attach(timeChanges);
            time.State = EntityState.Modified;
            _horaDbContext.SaveChanges();
            return timeChanges;
        }
    }
}
