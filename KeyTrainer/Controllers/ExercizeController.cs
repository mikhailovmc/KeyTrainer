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
            var difficultyLevel = await _exercizeBusiness.GetDifficultyLevelById(id);
            if (difficultyLevel == null)
                throw new Exception("Не удалось получить уровень сложности!");
            return difficultyLevel;
        }

        /// <summary>
        /// Редактировать уровень сложности
        /// </summary>
        /// <returns>Обновленный уровень сложности</returns>
        [HttpPost]
        [Route("UpdateDifficultyLevel")]
        public async Task<DifficultyLevelFullDto> UpdateDifficultyLevel(DifficultyLevelFullDto difficultyLevelDto)
        {
            var difficultyLevel = await _exercizeBusiness.UpdateDifficultyLevel(difficultyLevelDto);
            if (difficultyLevel == null)
                throw new Exception("Не удалось обновить уровень сложности!");
            return difficultyLevel;
        }

        /// <summary>
        /// Добавить упражнение (вручную)
        /// </summary>
        /// <returns>Добавленное упражнение</returns>
        [HttpPost]
        [Route("AddExercize")]
        public async Task<ExercizeFullDto> AddExercize(ExercizeSendDto exercizeDto)
        {
            var exercize = await _exercizeBusiness.AddExercize(exercizeDto);
            if (exercize == null)
                throw new Exception("Не удалось добавить упражнение!");
            return exercize;
        }

        /// <summary>
        /// Редактировать упражнение
        /// </summary>
        /// <returns>Обновленное упражнение</returns>
        [HttpPost]
        [Route("UpdateExercize")]
        public async Task<ExercizeFullDto> UpdateExercize(ExercizeSendDto exercizeSendDto)
        {
            var exercize = await _exercizeBusiness.UpdateExercize(exercizeSendDto);
            if (exercize == null)
                throw new Exception("Не удалось редактировать упражнение!");
            return exercize;
        }

        /// <summary>
        /// Создать упражнение
        /// </summary>
        /// <returns>Созданное упражнение</returns>
        [HttpPost]
        [Route("GenerateExercize")]
        public async Task<ExercizeSendDto> GenerateExercize()
        {
            var exercize = await _exercizeBusiness.GenerateExercize();
            if (exercize == null)
                throw new Exception("Не удалось создать упражнение!");
            return exercize;
        }
    }
}
