using KeyTrainer.Dto;
using KeyTrainer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeyTrainer.Contracts
{
    /// <summary>
    /// Контракт репозитория для работы с пользователями
    /// </summary>
    public interface IUserRepository
    {
        /// <summary>
        /// Добавить пользователя
        /// </summary>
        /// <param name="User"> ДТО пользователя для регистрации </param>
        Task SaveUser(User user);

        /// <summary>
        /// Получить пользователя
        /// </summary>
        /// <param name="userDto"> ДТО пользователя для авторизации </param>
        /// <returns> Объект пользователя </returns>
        Task<User> GetUser(UserDto userDto);

        /// <summary>
        /// Проверить уникальность логина пользователя
        /// </summary>
        /// <param name="login">Логин</param>
        /// <returns>Результат проверки</returns>
        Task<bool> CheckUserLogin(string login);
    }
}
