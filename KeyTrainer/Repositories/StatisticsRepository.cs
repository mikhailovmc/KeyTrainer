using KeyTrainer.Contracts;
using KeyTrainer.Dto;
using KeyTrainer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeyTrainer.Repositories
{
    /// <summary>
    /// Репозиторий для работы со статистикой
    /// </summary>
    public class StatisticsRepository : IStatisticsRepository
    {
        private readonly KeyTrainerDbContext _keyTrainerDbContext;

        public StatisticsRepository(KeyTrainerDbContext keyTrainerDbContext)
        {
            _keyTrainerDbContext = keyTrainerDbContext;
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Statistics>> GetStatistics()
        {
            return _keyTrainerDbContext.Statistics.
               Select(statistics => new Statistics
               {
                   Id = statistics.Id,
                   Status = statistics.Status,
                   LengthPercentage = statistics.LengthPercentage,
                   Accuracy = statistics.Accuracy,
                   TypingSpeed = statistics.TypingSpeed,
                   IdUser = statistics.IdUser,
                   IdExercize = statistics.IdExercize
               })
               .ToList();
        }

        /// <inheritdoc/>
        public async Task<Statistics> GetStatisticsById(int id)
        {
            return _keyTrainerDbContext.Statistics.
               FirstOrDefault(statistics => statistics.Id == id);
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Statistics>> GetStatisticsByUserId(int id)
        {
            return _keyTrainerDbContext.Statistics
                .Where(statistics => statistics.IdUser == id)
                .Select(statistics => new Statistics
                {
                    Id = statistics.Id,
                    Status = statistics.Status,
                    LengthPercentage = statistics.LengthPercentage,
                    Accuracy = statistics.Accuracy,
                    TypingSpeed = statistics.TypingSpeed,
                    IdUser = statistics.IdUser,
                    IdExercize = statistics.IdExercize
                })
                .ToList();
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Statistics>> GetStatisticsByExercizeId(int id)
        {
            return _keyTrainerDbContext.Statistics
                .Where(statistics => statistics.IdExercize == id)
                .Select(statistics => new Statistics
                {
                    Id = statistics.Id,
                    Status = statistics.Status,
                    LengthPercentage = statistics.LengthPercentage,
                    Accuracy = statistics.Accuracy,
                    TypingSpeed = statistics.TypingSpeed,
                    IdUser = statistics.IdUser,
                    IdExercize = statistics.IdExercize
                })
                .ToList();
        }

        /// <inheritdoc/>
        public async Task AddStatistics(Statistics statistics)
        {
            _keyTrainerDbContext.Statistics.Add(statistics);
            await _keyTrainerDbContext.SaveChangesAsync();
        }
    }
}
