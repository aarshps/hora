using Hora.Db.Ef.Entities;
using Microsoft.EntityFrameworkCore;

namespace Hora.Db.Ef
{
    public class HoraDbContext : DbContext
    {
        public HoraDbContext(DbContextOptions<HoraDbContext> options) : base(options)
        {

        }

        public DbSet<Time> Times { get; set; }
    }
}
