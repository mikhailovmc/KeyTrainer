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
    /// Репозиторий для работы с упражнениями и уровнями сложности 
    /// </summary>
    public class ExercizeRepository : IExercizeRepository
    {
        private readonly KeyTrainerDbContext _keyTrainerDbContext;

        public ExercizeRepository(KeyTrainerDbContext keyTrainerDbContext)
        {
            _keyTrainerDbContext = keyTrainerDbContext;
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Exercize>> GetExercizes()
        {
            return _keyTrainerDbContext.Exercize.
               Select(exercize => new Exercize
               {
                   IdDifficultyLevel = exercize.IdDifficultyLevel,
                   Id = exercize.Id,
                   Text = exercize.Text,
                   CountOfErrors = exercize.CountOfErrors,
                   MaxTime = exercize.MaxTime
               })
               .OrderBy(exercize => exercize.IdDifficultyLevel)
               .ToList();
        }

        /// <inheritdoc/>
        public async Task<Exercize> GetExerciseById(int id)
        {
            return _keyTrainerDbContext.Exercize
                .FirstOrDefault(exercize => exercize.Id == id);
        }

        /// <inheritdoc/>
        public async Task<DifficultyLevel> GetDifficultyLevelById(int id)
        {
            return _keyTrainerDbContext.DifficultyLevel
                .FirstOrDefault(difficultyLevel => difficultyLevel.Id == id);
        }
    }
}
