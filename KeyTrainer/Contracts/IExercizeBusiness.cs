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
        /// <returns></returns>
        Task<IEnumerable<ExercizeSendDto>> GetExercizes();

        /// <summary>
        /// Получить упражнение по его Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<ExercizeFullDto> GetExercizeById(int id);

        /// <summary>
        /// Получить уровень сложности по его Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<DifficultyLevelFullDto> GetDifficultyLevelById(int id);
    }
}
