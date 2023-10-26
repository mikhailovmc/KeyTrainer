using System.ComponentModel.DataAnnotations;

namespace KeyTrainer.Models
{
    /// <summary>
    /// Класс сущности БД - уровень сложности
    /// </summary>
    public class DifficultyLevel
    {
        /// <summary>
        /// Первичный ключ - id уровня сложности
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Максимальная длина упражнения
        /// </summary>
        [Required]
        public int MaxLength { get; set; }

        /// <summary>
        /// Максимальное число ошибок
        /// </summary>
        [Required]
        public int CountOfErrors { get; set; }

        /// <summary>
        /// Список клавиатурных зон
        /// </summary>
        [Required]
        public string[] ListOfZones { get; set; }
    }
}
