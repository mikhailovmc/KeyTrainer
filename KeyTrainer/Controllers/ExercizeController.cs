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
        [Route("api/GetExercizes")]
        public async Task<IEnumerable<ExercizeSendDto>> GetExercizes()
        {
            var exercizes = await _exercizeBusiness.GetExercizes();
            if (exercizes == null)
                throw new Exception("Не удалось получить упражнения!");
            return exercizes;
        }

        [HttpGet]
        [Route("api/GetExercize/{id}")]
        public async Task<ExercizeFullDto> GetExercize(int id)
        {
            var exercizes = await _exercizeBusiness.GetExercizeById(id);
            if (exercizes == null)
                throw new Exception("Не удалось получить упражнение!");
            return exercizes;
        }

        [HttpGet]
        [Route("api/GetDifficultyLevel/{id}")]
        public async Task<DifficultyLevelFullDto> GetDifficultyLevel(int id)
        {
            var exercizes = await _exercizeBusiness.GetDifficultyLevelById(id);
            if (exercizes == null)
                throw new Exception("Не удалось получить упражнение!");
            return exercizes;
        }
    }
}
