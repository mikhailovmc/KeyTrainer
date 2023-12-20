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
    /// Репозиторий для работы с пользователями
    /// </summary>
    public class UserRepository : IUserRepository
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

        /// <inheritdoc/>
        public async Task<User> GetUser(UserDto userDto)
        {
            return _keyTrainerDbContext.User
                .FirstOrDefault(user => user.Login == userDto.Login &&
                                        user.Password == userDto.Password);
        }

        /// <inheritdoc/>
        public async Task<bool> CheckUserLogin(string login)
        {
            return _keyTrainerDbContext.User
                .Any(user => user.Login == login);
        }
    }
}
