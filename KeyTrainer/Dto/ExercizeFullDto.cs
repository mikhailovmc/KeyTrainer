using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeyTrainer.Dto
{
    /// <summary>
    /// ДТО упражнения
    /// </summary>
    public class ExercizeFullDto
    {
        /// <summary>
        /// Id упражнения
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Текст упражнения
        /// </summary>
        public string Text { get; set; }

        /// <summary>
        /// Максимальное число ошибок
        /// </summary>
        public int CountOfErrors { get; set; }

        /// <summary>
        /// Максимальное время на выполнение (в секундах)
        /// </summary>
        public int MaxTime { get; set; }

        /// <summary>
        /// Id уровня сложности
        /// </summary>
        public int IdDifficultyLevel { get; set; }
    }
}
