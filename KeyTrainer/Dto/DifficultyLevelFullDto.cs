using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeyTrainer.Dto
{
    /// <summary>
    /// ДТО уровня сложности
    /// </summary>
    public class DifficultyLevelFullDto
    {
        /// <summary>
        /// Id уровня сложности
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Максимальная длина упражнения
        /// </summary>
        public int MaxLength { get; set; }

        /// <summary>
        /// Максимальное число ошибок
        /// </summary>
        public int CountOfErrors { get; set; }

        /// <summary>
        /// Список клавиатурных зон
        /// </summary>
        public IEnumerable<string> ListOfZones { get; set; }
    }
}
