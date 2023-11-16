using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using KeyTrainer.Contracts;
using KeyTrainer.Dto;
using Microsoft.AspNetCore.Mvc;

namespace KeyTrainer.Controllers
{
    /// <summary>
    /// Контроллер для работы с пользователями
    /// </summary>
    [Route("api/Statistics")]
    public class StatisticsController
    {
        private readonly IStatisticsBusiness _statisticsBusiness;

        public StatisticsController(IStatisticsBusiness statisticsBusiness)
        {
            _statisticsBusiness = statisticsBusiness;
        }

        /// <summary>
        /// Получить список статистики
        /// </summary>
        /// <returns>Список статистики</returns>
        [HttpGet]
        [Route("GetStatistics")]
        public async Task<IEnumerable<StatisticsFullDto>> GetStatistics()
        {
            var statistics = await _statisticsBusiness.GetStatistics();
            if (statistics == null)
                throw new Exception("Не удалось получить статистику!");
            return statistics;
        }

        /// <summary>
        /// Получить статистику по ее Id
        /// </summary>
        /// <param name="id">Id статистики</param>
        /// <returns>Статистика</returns>
        [HttpGet]
        [Route("GetStatistics/{id}")]
        public async Task<StatisticsFullDto> GetStatistics(int id)
        {
            var statistics = await _statisticsBusiness.GetStatisticsById(id);
            if (statistics == null)
                throw new Exception("Не удалось получить статистику!");
            return statistics;
        }

        /// <summary>
        /// Получить статистику по Id пользователя
        /// </summary>
        /// <param name="id">Id пользователя</param>
        /// <returns>Статистика пользователя</returns>
        [HttpGet]
        [Route("GetStatisticsByUserId/{id}")]
        public async Task<IEnumerable<StatisticsFullDto>> GetStatisticsByUserId(int id)
        {
            var statistics = await _statisticsBusiness.GetStatisticsByUserId(id);
            if (statistics == null)
                throw new Exception("Не удалось получить статистику пользователя!");
            return statistics;
        }

        /// <summary>
        /// Получить статистику по Id упражнения
        /// </summary>
        /// <param name="id">Id упражнения</param>
        /// <returns>Статистика упражнения</returns>
        [HttpGet]
        [Route("GetStatisticsByExercizeId/{id}")]
        public async Task<IEnumerable<StatisticsFullDto>> GetStatisticsByExercizeId(int id)
        {
            var statistics = await _statisticsBusiness.GetStatisticsByExercizeId(id);
            if (statistics == null)
                throw new Exception("Не удалось получить статистику упражнения!");
            return statistics;
        }

        /// <summary>
        /// Добавить статистику
        /// </summary>
        /// <param name="statisticsSendDto">ДТО статистики</param>
        /// <returns>Статистика упражнения</returns>
        [HttpPost]
        [Route("AddStatistics")]
        public async Task<StatisticsFullDto> AddStatistics(StatisticsSendDto statisticsSendDto)
        {
            var statistics = await _statisticsBusiness.AddStatistics(statisticsSendDto);
            if (statistics == null)
                throw new Exception("Не удалось добавить статистику упражнения!");
            return statistics;
        }
    }
}
