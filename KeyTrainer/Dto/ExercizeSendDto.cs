using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeyTrainer.Dto
{
    /// <summary>
    /// ДТО списка упражнений по уровням сложности 
    /// </summary>
    public class ExercizeSendDto
    {
        /// <summary>
        /// Список упражнений по уровням сложности
        /// </summary>
        public IEnumerable<string> Exercizes;
    }
}
