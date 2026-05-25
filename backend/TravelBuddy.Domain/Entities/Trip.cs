using System;

namespace TravelBuddy.Domain.Entities
{
    public class Trip
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Destinasyon { get; set; }
        public DateTime BaslangicTarihi { get; set; }
        public DateTime BitisTarihi { get; set; }
        public string ButceAraligi { get; set; }
        public string SeyahatAmaci { get; set; }

        public User User { get; set; }
    }
}
