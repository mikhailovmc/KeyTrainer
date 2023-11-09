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
        /// Получить уровень сложности по его Id
        /// </summary>
        /// <param name="id">Id уровня сложности</param>
        /// <returns>Уровень сложности</returns>
        Task<DifficultyLevelFullDto> GetDifficultyLevelById(int id);
    }
}
