using System;
using System.Collections.Generic;

namespace TravelBuddy.Domain.Entities
{
    public class User
    {
        public Guid Id { get; set; }
        public string Ad { get; set; }
        public string Soyad { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public bool IsKycVerified { get; set; }

        public ICollection<Trip> Trips { get; set; } = new List<Trip>();
    }
}
