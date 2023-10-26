using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KeyTrainer.Models
{
    /// <summary>
    /// Класс сущности БД - упражнения
    /// </summary>
    public class Exercize
    {
        /// <summary>
        /// Первичный ключ - id упражнения
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Текст упражнения
        /// </summary>
        [Required]
        public string Text { get; set; }

        /// <summary>
        /// Количество ошибок в упражнении
        /// </summary>
        [Required]
        public int CountOfErrors { get; set; }

        /// <summary>
        /// Максимальное время на упражнение в секундах
        /// </summary>
        [Required]
        public int MaxTime { get; set; }

        /// <summary>
        /// Внешний ключ таблицы - уровень сложности
        /// </summary>
        [Required]
        public int IdDifficultyLevel { get; set; }

        /// <summary>
        /// Объект уровня сложности по его ключу
        /// </summary>
        [ForeignKey(nameof(IdDifficultyLevel))]
        public virtual DifficultyLevel Difficulty { get; set; }
    }
}
