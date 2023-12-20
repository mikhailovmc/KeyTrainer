using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KeyTrainer.Dto;

namespace KeyTrainer.Contracts
{
    /// <summary>
    /// Контракт для работы с сервисом статистики
    /// </summary>
    public interface IStatisticsBusiness
    {
        /// <summary>
        /// Получить список статистики
        /// </summary>
        /// <returns>Список статистики</returns>
        Task<IEnumerable<StatisticsFullDto>> GetStatistics();

        /// <summary>
        /// Получить статистику по Id
        /// </summary>
        /// <param name="id">Id статистики</param>
        /// <returns>Статистика</returns>
        Task<StatisticsFullDto> GetStatisticsById(int id);

        /// <summary>
        /// Получить статистику по Id пользователя
        /// </summary>
        /// <param name="id">Id пользователя</param>
        /// <returns>Статистика пользователя</returns>
        Task<IEnumerable<StatisticsFullDto>> GetStatisticsByUserId(int id);

        /// <summary>
        /// Получить статистику по Id упражнения
        /// </summary>
        /// <param name="id">Id упражнения</param>
        /// <returns>Статистика пользователя</returns>
        Task<IEnumerable<StatisticsFullDto>> GetStatisticsByExercizeId(int id);

        /// <summary>
        /// Добавить статистику
        /// </summary>
        /// <param name="statisticsSendDto">ДТО статистики</param>
        /// <returns>Статистика пользователя</returns>
        Task<StatisticsFullDto> AddStatistics(StatisticsSendDto statisticsSendDto);

        /// <summary>
        /// Получить график скорости печати пользователя
        /// </summary>
        /// <param name="id">Ид пользователя</param>
        /// <returns>График скорости печати</returns>
        Task<GraphicDto> GetGraphic(int id);

        /// <summary>
        /// Получить диаграмму пройденных упражнений
        /// </summary>
        /// <param name="id">Ид пользователя</param>
        /// <returns>Диаграмма пройденных упражнений</returns>
        Task<DiagramDto> GetDiagram(int id);
    }
}
