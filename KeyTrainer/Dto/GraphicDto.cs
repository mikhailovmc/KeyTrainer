using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeyTrainer.Dto
{
    /// <summary>
    /// Дто графика скорости печати пользователя
    /// </summary>
    public class GraphicDto
    {
        /// <summary>
        /// Координата X
        /// </summary>
        public int[] X { get; set; }

        /// <summary>
        /// Координата Y
        /// </summary>
        public int[] Y { get; set; }
    }
}
