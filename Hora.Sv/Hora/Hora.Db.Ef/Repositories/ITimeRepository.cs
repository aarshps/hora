using Hora.Db.Ef.Entities;
using System.Collections.Generic;

namespace Hora.Db.Ef.Repositories
{
    public interface ITimeRepository
    {
        Time AddTime(Time time);
        Time GetTimeById(int timeId);
        IEnumerable<Time> GetAllTimes();
        Time UpdateTime(Time time);
        Time DeleteTimeById(int timeId);
    }
}
