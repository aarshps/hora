using System;
using System.ComponentModel.DataAnnotations;

namespace Hora.Db.Ef.Entities
{
    public class Time
    {
        [Key]
        public int TimeId { get; set; }
        public DateTime Start { get; set; }
    }
}
