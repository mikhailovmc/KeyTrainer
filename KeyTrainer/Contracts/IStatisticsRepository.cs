using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KeyTrainer.Models;

namespace KeyTrainer.Contracts
{
    /// <summary>
    /// Контракт репозитория для работы со статистикой
    /// </summary>
    public interface IStatisticsRepository
    {
        /// <summary>
        /// Получить список статистики
        /// </summary>
        /// <returns>Список статистики</returns>
        Task<IEnumerable<Statistics>> GetStatistics();

        /// <summary>
        /// Получить статистику по Id
        /// </summary>
        /// <returns>Статистика</returns>
        Task<Statistics> GetStatisticsById(int id);

        /// <summary>
        /// Получить статистику по Id пользователя
        /// </summary>
        /// <param name="id">Id пользователя</param>
        /// <returns>Статистика</returns>
        Task<IEnumerable<Statistics>> GetStatisticsByUserId(int id);

        /// <summary>
        /// Получить статистику по Id упражнения
        /// </summary>
        /// <param name="id">Id упражнения</param>
        /// <returns>Статистика</returns>
        Task<IEnumerable<Statistics>> GetStatisticsByExercizeId(int id);

        /// <summary>
        /// Добавить статистику
        /// </summary>
        /// <param name="statistics">Статистики</param>
        /// <returns>Статистика пользователя</returns>
        Task AddStatistics(Statistics statistics);
    }
}
