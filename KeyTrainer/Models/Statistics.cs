using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KeyTrainer.Models
{
    /// <summary>
    /// Класс сущности БД - статистика
    /// </summary>
    public class Statistics
    {
        /// <summary>
        /// Первичный ключ - id статистики
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Статус выполнения упражнения
        /// </summary>
        [Required]
        public string Status { get; set; }

        /// <summary>
        /// Процент выполнения относительно длины упражнения
        /// </summary>
        [Required]
        public int LengthPercentage { get; set; }

        /// <summary>
        /// Точность набора
        /// </summary>
        [Required]
        public int Accuracy { get; set; }

        /// <summary>
        /// Скорость набора
        /// </summary>
        [Required]
        public int TypingSpeed { get; set; }

        /// <summary>
        /// Внешний ключ таблицы - пользователь
        /// </summary>
        [Required]
        public int IdUser { get; set; }

        /// <summary>
        /// Объект пользователя по его ключу
        /// </summary>
        [ForeignKey(nameof(IdUser))]
        public virtual User User { get; set; }

        /// <summary>
        /// Внешний ключ таблицы - упражнение
        /// </summary>
        [Required]
        public int IdExercize { get; set; }

        /// <summary>
        /// Объект упражнения по его ключу
        /// </summary>
        [ForeignKey(nameof(IdExercize))] 
        public virtual Exercize Exercize { get; set; }
    }
}
