using System;
using System.Linq;
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
    public class ExercizeController : ControllerBase
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
        public async Task<IActionResult> GetExercizes()
        {
            var exercizes = await _exercizeBusiness.GetExercizes();
            if (exercizes == null)
                return StatusCode(500, "Ошибка 15 - Не удалось получить упражнения");
            return Ok(exercizes);
        }

        /// <summary>
        /// Получить список упражнений по уровням сложности для пользовател
        /// </summary>
        /// <returns>Список упражнений по уровням сложности</returns>
        [HttpGet]
        [Route("GetExercizesForUser/{id}")]
        public async Task<IActionResult> GetExercizesForUser(int id)
        {
            var exercizes = await _exercizeBusiness.GetExercizesForUser(id);
            if (exercizes == null)
                return StatusCode(500, "Ошибка 15 - Не удалось получить упражнения");
            return Ok(exercizes);
        }

        /// <summary>
        /// Получить упражнение по его Id
        /// </summary>
        /// <param name="id">Id упражнения</param>
        /// <returns>Упражнение</returns>
        [HttpGet]
        [Route("GetExercize/{id}")]
        public async Task<IActionResult> GetExercize(int id)
        {
            var exercize = await _exercizeBusiness.GetExercizeById(id);
            if (exercize == null)
                return StatusCode(500, "Ошибка 14 - Упражнение не найдено");
            return Ok(exercize);
        }

        /// <summary>
        /// Получить упражнение для редактирования по его Id
        /// </summary>
        /// <param name="id">Id упражнения</param>
        /// <returns>Упражнение</returns>
        [HttpGet]
        [Route("GetExercizeForEditing/{id}")]
        public async Task<IActionResult> GetExercizeForEditing(int id)
        {
            var exercize = await _exercizeBusiness.GetExercizeForEditingById(id);
            if (exercize == null)
                return StatusCode(500, "Ошибка 14 - Упражнение не найдено");
            return Ok(exercize);
        }

        /// <summary>
        /// Получить уровень сложности по его Id
        /// </summary>
        /// <param name="id">Id уровня сложности</param>
        /// <returns>Уровень сложности</returns>
        [HttpGet]
        [Route("GetDifficultyLevel/{id}")]
        public async Task<IActionResult> GetDifficultyLevel(int id)
        {
            var difficultyLevel = await _exercizeBusiness.GetDifficultyLevelById(id);
            if (difficultyLevel == null)
                return StatusCode(500, "Ошибка 16 - Уровень сложности не найден");
            return Ok(difficultyLevel);
        }

        /// <summary>
        /// Редактировать уровень сложности
        /// </summary>
        /// <returns>Обновленный уровень сложности</returns>
        [HttpPost]
        [Route("UpdateDifficultyLevel")]
        public async Task<IActionResult> UpdateDifficultyLevel(DifficultyLevelFullDto difficultyLevelDto)
        {
            var difficultyLevel = await _exercizeBusiness.UpdateDifficultyLevel(difficultyLevelDto);
            if (_exercizeBusiness.GetErrors.Any())
                return StatusCode(500, _exercizeBusiness.GetErrors);
            return Ok(difficultyLevel);
        }

        /// <summary>
        /// Добавить упражнение (вручную)
        /// </summary>
        /// <returns>Добавленное упражнение</returns>
        [HttpPost]
        [Route("AddExercize")]
        public async Task<IActionResult> AddExercize(ExercizeSendDto exercizeDto)
        {
            var exercize = await _exercizeBusiness.AddExercize(exercizeDto);
            if (_exercizeBusiness.GetErrors.Any())
                return StatusCode(500, _exercizeBusiness.GetErrors);
            return Ok(exercize);
        }

        /// <summary>
        /// Редактировать упражнение
        /// </summary>
        /// <returns>Обновленное упражнение</returns>
        [HttpPost]
        [Route("UpdateExercize")]
        public async Task<IActionResult> UpdateExercize(ExercizeSendDto exercizeSendDto)
        {
            var exercize = await _exercizeBusiness.UpdateExercize(exercizeSendDto);
            if (_exercizeBusiness.GetErrors.Any())
                return StatusCode(500, _exercizeBusiness.GetErrors);
            return Ok(exercize);
        }

        /// <summary>
        /// Создать упражнение
        /// </summary>
        /// <returns>Созданное упражнение</returns>
        [HttpGet]
        [Route("GenerateExercize")]
        public async Task<IActionResult> GenerateExercize()
        {
            var exercize = await _exercizeBusiness.GenerateExercize();
            if (exercize == null)
                return StatusCode(500, "Ошибка 17 - Не удалось создать упражнение");
            return Ok(exercize);
        }

        /// <summary>
        /// Получить упражнения для выбора статистики
        /// </summary>
        /// <returns>Список ДТО названий упражнений</returns>
        [HttpGet]
        [Route("GetExercizeNames")]
        public async Task<IActionResult> GetExercizeNames()
        {
            var exercizes = await _exercizeBusiness.GetExercizeNames();
            if (exercizes == null)
                return StatusCode(500, "Ошибка 28 - Не удалось получить названия упражнений");
            return Ok(exercizes);
        }
    }
}
