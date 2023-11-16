using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeyTrainer.Dto
{
    /// <summary>
    /// ДТО получаемой статистики
    /// </summary>
    public class StatisticsSendDto
    {
        /// <summary>
        /// Статус выполнения
        /// </summary>
        public string Status { get; set; }

        /// <summary>
        /// Длина фактическая
        /// </summary>
        public int Length { get; set; }

        /// <summary>
        /// Количество ошибок
        /// </summary>
        public int CountOfErrors { get; set; }

        /// <summary>
        /// Время
        /// </summary>
        public int Time { get; set; }

        /// <summary>
        /// Id пользователя
        /// </summary>
        public int IdUser { get; set; }

        /// <summary>
        /// Id упражннения
        /// </summary>
        public int IdExercize { get; set; }
    }
}
