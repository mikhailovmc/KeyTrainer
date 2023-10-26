using Autofac.Extensions.DependencyInjection;
using KeyTrainer.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeyTrainer
{
    public class Program
    {
        public static void Main(string[] args)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
            using (KeyTrainerDbContext db = new KeyTrainerDbContext())
            {
                if (!db.User.Any())
                {
                    db.User.Add(
                        new User { 
                            Login = "admin",
                            Password = "admin"
                        }
                    );
                    db.SaveChanges();
                }

                if (!db.DifficultyLevel.Any())
                {
                    db.DifficultyLevel.Add(
                        new DifficultyLevel
                        {
                            CountOfErrors = 5,
                            MaxLength = 30,
                            ListOfZones = new List<string>() { "1", "2", "3" }.ToArray()
                        }               
                    );
                    db.SaveChanges();
                }

                if (!db.Exercize.Any())
                {
                    db.Exercize.Add(
                        new Exercize
                        {
                            IdDifficultyLevel = 1, 
                            CountOfErrors = 5, 
                            MaxTime = 300, 
                            Text = "Тестовое упражнение"
                        }
                    );
                    db.SaveChanges();
                }

                if (!db.Statistics.Any())
                {
                    db.Statistics.Add(
                        new Statistics
                        {
                            IdExercize = 1,
                            IdUser = 1, 
                            Accuracy = 100, 
                            LengthPercentage = 100,
                            Status = "Выполнено", 
                            TypingSpeed = 1, 
                        }
                    );
                    db.SaveChanges();
                }
            }

            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseServiceProviderFactory(new AutofacServiceProviderFactory())
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
