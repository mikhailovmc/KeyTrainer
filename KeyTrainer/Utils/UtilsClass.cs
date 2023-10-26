using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeyTrainer.Utils
{
    /// <summary>
    /// утиль
    /// </summary>
    static public class UtilsClass
    {
        /// <summary>
        /// строка подключения к postgres
        /// </summary>
        public static string ConnectioString { get { return "Host=localhost;Port=5432;Database=Keyboard_Trainer;Username=postgres;Password=user1"; } }
    }
}
