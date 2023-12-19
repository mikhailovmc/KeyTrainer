using KeyTrainer.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeyTrainer.Contracts
{
    /// <summary>
    /// Контракт для работы с сервисом упражнений
    /// </summary>
    public interface IExercizeBusiness
    {
        // <summary>
        /// Получить список ошибок
        /// </summary>
        IEnumerable<string> GetErrors { get; }

        /// <summary>
        /// Получить список упражнений по уровням сложности
        /// </summary>
        /// <returns>Список упражнений</returns>
        Task<IEnumerable<ExercizeFullDto>> GetExercizes();

        /// <summary>
        /// Получить упражнение по его Id
        /// </summary>
        /// <param name="id">Id упражнения</param>
        /// <returns>Упражнение</returns>
        Task<ExercizeFullDto> GetExercizeById(int id);

        /// <summary>
        /// Получить упражнение для редактирования по его Id
        /// </summary>
        /// <param name="id">Id упражнения</param>
        /// <returns>Упражнение</returns>
        Task<ExercizeSendDto> GetExercizeForEditingById(int id);

        /// <summary>
        /// Получить уровень сложности по его Id
        /// </summary>
        /// <param name="id">Id уровня сложности</param>
        /// <returns>Уровень сложности</returns>
        Task<DifficultyLevelFullDto> GetDifficultyLevelById(int id);

        /// <summary>
        /// Редактировать уровень сложности
        /// </summary>
        /// <param name="difficultyLevelFullDto">ДТО уровня сложности</param>
        /// <returns>Уровень сложности</returns>
        Task<DifficultyLevelFullDto> UpdateDifficultyLevel(DifficultyLevelFullDto difficultyLevelFullDto);

        /// <summary>
        /// Добавить упражнение
        /// </summary>
        /// <param name="exercizeSendDto">ДТО упражнения</param>
        /// <returns>Упражнение</returns>
        Task<ExercizeFullDto> AddExercize(ExercizeSendDto exercizeSendDto);

        /// <summary>
        /// Редактировать упражнение
        /// </summary>
        /// <param name="exercizeSendDto">ДТО упражнения</param>
        /// <returns>Упражнение</returns>
        Task<ExercizeFullDto> UpdateExercize(ExercizeSendDto exercizeSendDto);

        /// <summary>
        /// Создать упражнение
        /// </summary>
        /// <returns>Упражнение</returns>
        Task<ExercizeSendDto> GenerateExercize();
    }
}
