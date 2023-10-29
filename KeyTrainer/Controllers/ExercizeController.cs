using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using KeyTrainer.Contracts;
using KeyTrainer.Dto;
using Microsoft.AspNetCore.Mvc;

namespace KeyTrainer.Controllers
{
    /// <summary>
    /// Контроллер для работы с упржанениями и уровнями сложностей
    /// </summary>
    [Route("api/Exercize")]
    public class ExercizeController
    {
        private readonly IExercizeBusiness _exercizeBusiness;

        public ExercizeController(IExercizeBusiness exercizeBusiness)
        {
            _exercizeBusiness = exercizeBusiness;
        }

        /// <summary>
        /// Получить список упражнений по уровням сложности
        /// </summary>
        /// <returns>Список упражнений по уровням сложности</returns>
        [HttpGet]
        [Route("GetExercizes")]
        public async Task<IEnumerable<ExercizeFullDto>> GetExercizes()
        {
            var exercizes = await _exercizeBusiness.GetExercizes();
            if (exercizes == null)
                throw new Exception("Не удалось получить упражнения!");
            return exercizes;
        }

        /// <summary>
        /// Получить упражнение по его Id
        /// </summary>
        /// <param name="id">Id упражнения</param>
        /// <returns>Упражнение</returns>
        [HttpGet]
        [Route("GetExercize/{id}")]
        public async Task<ExercizeFullDto> GetExercize(int id)
        {
            var exercize = await _exercizeBusiness.GetExercizeById(id);
            if (exercize == null)
                throw new Exception("Не удалось получить упражнение!");
            return exercize;
        }

        /// <summary>
        /// Получить уровень сложности по его Id
        /// </summary>
        /// <param name="id">Id уровня сложности</param>
        /// <returns>Уровень сложности</returns>
        [HttpGet]
        [Route("GetDifficultyLevel/{id}")]
        public async Task<DifficultyLevelFullDto> GetDifficultyLevel(int id)
        {
            var exercizes = await _exercizeBusiness.GetDifficultyLevelById(id);
            if (exercizes == null)
                throw new Exception("Не удалось получить упражнение!");
            return exercizes;
        }
    }
}
