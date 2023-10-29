using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KeyTrainer.Models;

namespace KeyTrainer.Contracts
{
    /// <summary>
    /// Контракт репозитория для работы с упражнениями
    /// </summary>
    public interface IExercizeRepository
    {
        /// <summary>
        /// Получить список упражнений по уровням сложности
        /// </summary>
        /// <returns>Список упражнений по уровням сложности</returns>
        Task<IEnumerable<Exercize>> GetExercizes();

        /// <summary>
        /// Получить упражнение по Id
        /// </summary>
        /// <param name="id">Id упражнения</param>
        /// <returns>Упражнение</returns>
        Task<Exercize> GetExerciseById(int id);

        /// <summary>
        /// Получить уровень сложности по Id
        /// </summary>
        /// <param name="id">Id уровня сложности</param>
        /// <returns>Уровень сложности</returns>
        Task<DifficultyLevel> GetDifficultyLevelById(int id);
    }
}
