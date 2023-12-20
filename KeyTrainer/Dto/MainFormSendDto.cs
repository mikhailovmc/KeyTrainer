using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeyTrainer.Dto
{
    /// <summary>
    /// Дто для главной страницы, отправляются совместно записи статистики по пройденным упражнениям
    /// и записи упражнений для непройденных упражнений
    /// </summary>
    public class MainFormSendDto
    {
        /// <summary>
        /// Id упражнения
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Id уровня сложности
        /// </summary>
        public int IdDifficultyLevel { get; set; }
       
        /// <summary>
        /// Длина упражнения
        /// </summary>
        public int Length { get; set; }

        /// <summary>
        /// Процент выполнения относительно длины упражнения
        /// </summary>
        public int LengthPercentage { get; set; }

        /// <summary>
        /// Статус выполнения упражнения
        /// </summary>
        public string Status { get; set; }
    }
}
