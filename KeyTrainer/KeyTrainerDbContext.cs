using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using KeyTrainer.Models;
using KeyTrainer.Utils;

namespace KeyTrainer
{
    /// <summary>
    /// Контекст базы данных
    /// </summary>
    public class KeyTrainerDbContext: DbContext
    {
        public DbSet<User> User { get; set; }
        public DbSet<Statistics> Statistics { get; set; }
        public DbSet<Exercize> Exercize { get; set; }
        public DbSet<DifficultyLevel> DifficultyLevel { get; set; }

        public KeyTrainerDbContext()
        {
            Database.EnsureCreated();
            Console.WriteLine("EnsureCreated");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=BookStore;Username=postgres;Password=user1");
        }
    }
}