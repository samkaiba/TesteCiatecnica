using Microsoft.EntityFrameworkCore;

namespace Teste.Models
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {
            //Caso nao exista criar.
            Database.EnsureCreated();
        }

        public DbSet<Cliente> Clientes { get; set; }
    }
}
