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

        public UserRepository(KeyTrainerDbContext keyTrainerDbContext)
        {
            _keyTrainerDbContext = keyTrainerDbContext;
        }

        /// <inheritdoc/>
        public async Task SaveUser(User user)
        {
            await _keyTrainerDbContext.User.AddAsync(user);
            await _keyTrainerDbContext.SaveChangesAsync();
        }
    }
}
