using Microsoft.EntityFrameworkCore;



namespace PropertyRental.Models
{

    public class DataContext : DbContext
    {



        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Property> Properties { get; set; }
    }
}