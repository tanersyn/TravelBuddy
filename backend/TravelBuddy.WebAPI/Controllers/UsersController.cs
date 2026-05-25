using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using TravelBuddy.Infrastructure.Data;

namespace TravelBuddy.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/users
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            // Veritabanından tüm kullanıcıları listeler
            var users = await _context.Users.ToListAsync();
            return Ok(users);
        }
    }
}
