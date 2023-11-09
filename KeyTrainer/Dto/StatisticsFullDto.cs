using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeyTrainer.Dto
{
    /// <summary>
    /// ДТО статистики
    /// </summary>
    public class StatisticsFullDto
    {
        /// <summary>
        /// Id статистики
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Статус выполнения упражнения
        /// </summary>
        public string Status { get; set; }

        /// <summary>
        /// Процент выполнения относительно длины упражнения
        /// </summary>
        public int LengthPercentage { get; set; }

        /// <summary>
        /// Точность набора
        /// </summary>
        public int Accuracy { get; set; }

        /// <summary>
        /// Скорость набора
        /// </summary>
        public int TypingSpeed { get; set; }

        /// <summary>
        /// Id пользователя
        /// </summary>
        public int IdUser { get; set; }

        /// <summary>
        /// Id упражнения
        /// </summary>
        public int IdExercize { get; set; }
    }
}
