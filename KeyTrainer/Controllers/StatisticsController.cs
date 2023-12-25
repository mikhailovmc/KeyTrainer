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
    public class StatisticsController : ControllerBase
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
        public async Task<IActionResult> GetStatistics()
        {
            var statistics = await _statisticsBusiness.GetStatistics();
            if (statistics == null)
                return StatusCode(500, "Ошибка 18 - Записи статистики не найдены");
            return Ok(statistics);
        }

        /// <summary>
        /// Получить статистику по ее Id
        /// </summary>
        /// <param name="id">Id статистики</param>
        /// <returns>Статистика</returns>
        [HttpGet]
        [Route("GetStatistics/{id}")]
        public async Task<IActionResult> GetStatistics(int id)
        {
            var statistics = await _statisticsBusiness.GetStatisticsById(id);
            if (statistics == null)
                return StatusCode(500, "Ошибка 19 - Запись статистики не найдена");
            return Ok(statistics);
        }

        /// <summary>
        /// Получить статистику по Id пользователя
        /// </summary>
        /// <param name="id">Id пользователя</param>
        /// <returns>Статистика пользователя</returns>
        [HttpGet]
        [Route("GetStatisticsByUserId/{id}")]
        public async Task<IActionResult> GetStatisticsByUserId(int id)
        {
            var statistics = await _statisticsBusiness.GetStatisticsByUserId(id);
            if (statistics == null)
                return StatusCode(500, "Ошибка 20 - Записи статистики пользователя не найдены");
            return Ok(statistics);
        }

        /// <summary>
        /// Получить статистику по Id упражнения
        /// </summary>
        /// <param name="id">Id упражнения</param>
        /// <returns>Статистика упражнения</returns>
        [HttpGet]
        [Route("GetStatisticsByExercizeId/{id}")]
        public async Task<IActionResult> GetStatisticsByExercizeId(int id)
        {
            var statistics = await _statisticsBusiness.GetStatisticsByExercizeId(id);
            if (statistics == null)
                return StatusCode(500, "Ошибка 21 - Записи статистики упражнения не найдены");
            return Ok(statistics);
        }

        /// <summary>
        /// Добавить статистику
        /// </summary>
        /// <param name="statisticsSendDto">ДТО статистики</param>
        /// <returns>Статистика упражнения</returns>
        [HttpPost]
        [Route("AddStatistics")]
        public async Task<IActionResult> AddStatistics(StatisticsSendDto statisticsSendDto)
        {
            var statistics = await _statisticsBusiness.AddStatistics(statisticsSendDto);
            if (statistics == null)
                return StatusCode(500, "Ошибка 24 - Не удалось добавить статистику упражнения");
            return Ok();
        }

        /// <summary>
        /// Получить график скорости печати пользователя
        /// </summary>
        /// <param name="id">Id пользователя</param>
        /// <returns>График скорсоти печати</returns>
        [HttpGet]
        [Route("GetGraphic/{id}")]
        public async Task<IActionResult> GetGrapchic(int id)
        {
            var graphic = await _statisticsBusiness.GetGraphic(id);
            if (graphic == null)
                return StatusCode(500, "Ошибка 25 - Не удалось получить график скорости печати");
            return Ok(graphic);
        }

        /// <summary>
        /// Получить диаграмму пройденных упражнений
        /// </summary>
        /// <param name="id">Id пользователя</param>
        /// <returns>График скорсоти печати</returns>
        [HttpGet]
        [Route("GetDiagram/{id}")]
        public async Task<IActionResult> GetDiagram(int id)
        { 
            var diagram = await _statisticsBusiness.GetDiagram(id);
            if (diagram == null)
                return StatusCode(500, "Ошибка 26 - Не удалось получить диаграмму выполненных упражнений");
            return Ok(diagram);
        }
    }
}
