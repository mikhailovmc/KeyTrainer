using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeyTrainer.Dto
{
    /// <summary>
    /// ДТО для выбора пользователя в статистике
    /// </summary>
    public class UserLoginsDto
    {
        /// <summary>
        /// Id пользователя
        /// </summary>
        public int Value { get; set; }

        /// <summary>
        /// Логин пользователя
        /// </summary>
        public string Label { get; set; }
    }
}
