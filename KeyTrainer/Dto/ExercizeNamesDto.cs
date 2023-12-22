using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeyTrainer.Dto
{
    /// <summary>
    /// ДТО для выбора упражнения в статистике 
    /// </summary>
    public class ExercizeNamesDto
    {
        /// <summary>
        /// Id упражнения
        /// </summary>
        public int Value { get; set; }

        /// <summary>
        /// Название упражнения
        /// </summary>
        public string Label { get; set; }
    }
}
