using AutoMapper;
using KeyTrainer.Contracts;
using KeyTrainer.Dto;
using KeyTrainer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeyTrainer.Business
{
    /// <summary>
    /// Сервис для упражнений
    /// </summary>
    public class ExercizeBusiness : IExercizeBusiness
    {
        private readonly Dictionary<string, char[]> _keyboardZones = new Dictionary<string, char[]>()
            {
                { "11", new char[] {'1', '2', '0', '-', '='} },

                { "12", new char[] {'й', 'з', 'х', 'ъ'} },

                { "13", new char[] {'ф', 'ж', 'э'} },

                { "14", new char[] {'я', '.'} },

                { "21", new char[] {'3', '9'} },

                { "22", new char[] {'ц', 'щ'} },

                { "23", new char[] {'ы', 'д'} },

                { "24", new char[] {'ч', 'ю'} },

                { "31", new char[] {'4', '8'} },

                { "32", new char[] {'у', 'ш'} },

                { "33", new char[] {'в', 'л'} },

                { "34", new char[] {'с', 'б'} },

                { "41", new char[] {'5', '6', '7'} },

                { "42", new char[] {'к', 'е', 'н', 'г'} },

                { "43", new char[] {'а', 'п', 'р', 'о'} },

                { "44", new char[] { 'м', 'и', 'т', 'ь'} },

                { "51", new char[] { ' ' } }
            };

        private readonly IExercizeRepository _exercizeRepository;
        private readonly IStatisticsRepository _statisticsRepository;
        private readonly IMapper _mapper;
        private readonly List<string> _errors;

        public ExercizeBusiness(
            IExercizeRepository exercizeRepository,
            IStatisticsRepository statisticsRepository,
            IMapper mapper)
        {
            _exercizeRepository = exercizeRepository;
            _statisticsRepository = statisticsRepository;
            _mapper = mapper;
            _errors = new List<string>();
        }

        /// <inheritdoc/>
        public IEnumerable<string> GetErrors { get { return _errors; } }

        /// <inheritdoc/>
        public async Task<IEnumerable<ExercizeFullDto>> GetExercizes()
        {
            var exercizesDto = new List<ExercizeFullDto>();
            var exercizes = await _exercizeRepository.GetExercizes();
            foreach (var exercize in exercizes)
            {
                exercizesDto.Add(_mapper.Map<ExercizeFullDto>(exercize));
            }
            return exercizesDto;
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<MainFormSendDto>> GetExercizesForUser(int id)
        {
            var exercizesDto = new List<MainFormSendDto>();

            var exercizes = await _exercizeRepository.GetExercizes();
            var statistics = await _statisticsRepository.GetStatisticsByUserId(id);

            var orderingStats = statistics.OrderByDescending(s => s.Id);

            var exercizeIds = new List<int>(); 

            foreach (var stats in orderingStats)
            {
                var exercize = await _exercizeRepository.GetExerciseById(stats.IdExercize);

                if (exercizeIds.Contains(stats.Id))
                {
                    continue;
                }

                var mainFormDto = new MainFormSendDto()
                {
                    Id = stats.IdExercize,
                    IdDifficultyLevel = exercize.IdDifficultyLevel,
                    Length = exercize.Text.Length,
                    LengthPercentage = stats.LengthPercentage,
                    Status = stats.Status
                };
                exercizesDto.Add(mainFormDto);

                exercizeIds.Add(stats.IdExercize);
            }

            foreach (var exercize in exercizes)
            {
                if (exercizeIds.Contains(exercize.Id))
                {
                    continue;
                }

                var mainFormDto = new MainFormSendDto()
                {
                    Id = exercize.Id,
                    IdDifficultyLevel = exercize.IdDifficultyLevel,
                    Length = exercize.Text.Length,
                    LengthPercentage = 0,
                    Status = "Не начато",
                };
                exercizesDto.Add(mainFormDto);
            }

            return exercizesDto;
        }

        /// <inheritdoc/>
        public async Task<ExercizeFullDto> GetExercizeById(int id)
        {
            var exercize = await _exercizeRepository.GetExerciseById(id);
            return _mapper.Map<ExercizeFullDto>(exercize);
        }

        /// <inheritdoc/>
        public async Task<ExercizeSendDto> GetExercizeForEditingById(int id)
        {
            var exercize = await _exercizeRepository.GetExerciseById(id);
            var difficultyLevel = await _exercizeRepository.GetDifficultyLevelById(exercize.IdDifficultyLevel);
            return new ExercizeSendDto()
            {
                Id = exercize.Id,
                IdDifficultyLevel = difficultyLevel.Id,
                ListOfZones = difficultyLevel.ListOfZones,
                Text = exercize.Text,
                CountOfErrors = difficultyLevel.CountOfErrors,
                MaxTime = exercize.MaxTime
            };
        }

        /// <inheritdoc/>
        public async Task<DifficultyLevelFullDto> GetDifficultyLevelById(int id)
        {
            var difficultyLevel = await _exercizeRepository.GetDifficultyLevelById(id);
            return _mapper.Map<DifficultyLevelFullDto>(difficultyLevel);
        }

        /// <inheritdoc/>
        public async Task<DifficultyLevelFullDto> UpdateDifficultyLevel(DifficultyLevelFullDto difficultyLevelFullDto)
        {
            var oldDifficultyLevel = await _exercizeRepository.GetDifficultyLevelById(difficultyLevelFullDto.Id);

            if (oldDifficultyLevel == null)
            {
                _errors.Add("Ошибка 16 - Уровень сложности не найден");
                return null;
            }

            if (!ValidateDifficultyLevel(difficultyLevelFullDto))
            {
                return null;
            }

            oldDifficultyLevel.CountOfErrors = difficultyLevelFullDto.CountOfErrors;
            oldDifficultyLevel.MaxLength = difficultyLevelFullDto.MaxLength;
            oldDifficultyLevel.ListOfZones = difficultyLevelFullDto.ListOfZones.First().Split(',');

            await _exercizeRepository.UpdateDifficultyLevel(oldDifficultyLevel);
            var newDifficultyLevel = await _exercizeRepository.GetDifficultyLevelById(difficultyLevelFullDto.Id);
            return _mapper.Map<DifficultyLevelFullDto>(newDifficultyLevel);
        }

        private bool ValidateDifficultyLevel(DifficultyLevelFullDto difficultyLevelFullDto)
        {
            if (difficultyLevelFullDto.CountOfErrors < 3 ||
                difficultyLevelFullDto.CountOfErrors > 10)
            {
                _errors.Add("Ошибка 10 - Неправильное количество ошибок [3, 10]");
            }

            if (difficultyLevelFullDto.MaxLength < 20 ||
                difficultyLevelFullDto.MaxLength > 130)
            {
                _errors.Add("Ошибка 9 - Неправильная длина упражнения [20, 130]");
            }

            if (_errors.Any())
            {
                return false;
            }

            return true;
        }

        /// <inheritdoc/>
        public async Task<ExercizeFullDto> AddExercize(ExercizeSendDto exercizeSendDto)
        {
            var isValid = await ValidateExercize(exercizeSendDto);
            if (!isValid)
            {
                return null;
            }

            if (await _exercizeRepository.GetCountOfExercizesByDifficultyLevelId(exercizeSendDto.IdDifficultyLevel) > 9)
            {
                _errors.Add("Ошибка 23 - Количество упражнений на выбранном уровне сложности не может быть больше 10");
                return null;
            }

            var exercize = _mapper.Map<Exercize>(exercizeSendDto);
            await _exercizeRepository.AddExercize(exercize);
            var newExercize = await _exercizeRepository.GetExerciseById(exercize.Id);
            return _mapper.Map<ExercizeFullDto>(newExercize);
        }

        /// <inheritdoc/>
        public async Task<ExercizeFullDto> UpdateExercize(ExercizeSendDto exercizeSendDto)
        {
            var oldExercize = await _exercizeRepository.GetExerciseById(exercizeSendDto.Id);

            if (oldExercize == null)
            {
                _errors.Add("Ошибка 14 - Упражнение не найдено");
                return null;
            }

            var isValid = await ValidateExercize(exercizeSendDto);
            if (!isValid)
            {
                return null;
            }

            oldExercize.CountOfErrors = exercizeSendDto.CountOfErrors;
            oldExercize.IdDifficultyLevel = exercizeSendDto.IdDifficultyLevel;
            oldExercize.MaxTime = exercizeSendDto.MaxTime;
            oldExercize.Text = exercizeSendDto.Text;

            await _exercizeRepository.UpdateExercize(oldExercize);
            var newExercize = await _exercizeRepository.GetExerciseById(oldExercize.Id);
            return _mapper.Map<ExercizeFullDto>(newExercize);
        }

        /// <summary>
        /// Проверить параметры упражнения
        /// </summary>
        /// <param name="exercizeSendDto">ДТО упражнения для проверки</param>
        /// <returns>Результат валидации</returns>
        private async Task<bool> ValidateExercize(ExercizeSendDto exercizeSendDto)
        {
            var difficultyLevel = await _exercizeRepository.GetDifficultyLevelById(exercizeSendDto.IdDifficultyLevel);

            if (difficultyLevel == null)
            {
                _errors.Add("Ошибка 7 - Уровень сложности не найден");
            }

            if (exercizeSendDto.Text.Length > difficultyLevel.MaxLength ||
                exercizeSendDto.CountOfErrors > difficultyLevel.CountOfErrors)
            {
                _errors.Add("Ошибка 8 - Параметры упражнения выходят за ограничения уровня сложности");
            }

            if (exercizeSendDto.Text.Length < 20 ||
                exercizeSendDto.Text.Length > 130)
            {
                _errors.Add("Ошибка 9 - Неправильная длина упражнения [20, 130]");
            }

            if (exercizeSendDto.CountOfErrors < 3 ||
                exercizeSendDto.CountOfErrors > 10)
            {
                _errors.Add("Ошибка 10 - Неправильное количество ошибок [3, 10]");
            }

            if (exercizeSendDto.MaxTime < 60 ||
                exercizeSendDto.MaxTime > 300)
            {
                _errors.Add("Ошибка 11 - Неправильное время на выполнение упражнения [60, 300]");
            }

            var listOfZones = exercizeSendDto.ListOfZones.First().Split(',');

            foreach (var zone in listOfZones)
            {
                if (!difficultyLevel.ListOfZones.Contains(zone))
                {
                    _errors.Add("Ошибка 12 - Клавиатурные зоны не соответствуют уровню сложности");
                }
            }

            var keys = " ";
            foreach (var zone in listOfZones)
            {
                for (int i = 1; i < 5; i++)
                {
                    _keyboardZones.TryGetValue(zone + i, out var chars);
                    for (int j = 0; j < chars.Length; j++)
                    {
                        keys += chars[j];
                    }
                }
            }

            foreach (var key in exercizeSendDto.Text)
            {
                if (!keys.Contains(key))
                {
                    _errors.Add("Ошибка 13 - Текст не соответствует выбранным клавиатурным зонам");
                    break;
                }
            }

            if (_errors.Any())
            {
                return false;
            }

            return true;
        }

        /// <inheritdoc/>
        public async Task<ExercizeSendDto> GenerateExercize()
        {
            Random random = new Random();
            var difficultyLevelId = random.Next(1, 4);
            var difficultyLevel = await _exercizeRepository.GetDifficultyLevelById(difficultyLevelId);

            var rows = new List<int>();
            for (int i = 0; i < difficultyLevelId; i++)
            {
                rows.Add(random.Next(1, 4));
            }

            var exercizeText = "";
            while (exercizeText.Length < difficultyLevel.MaxLength - difficultyLevel.ListOfZones.Length - rows.Count)
            {
                foreach (var zone in difficultyLevel.ListOfZones)
                {
                    foreach (var row in rows)
                    {
                        _keyboardZones.TryGetValue(zone + row, out var keys);
                        if (keys != null)
                        {
                            exercizeText += keys[random.Next(0, keys.Length)];
                        }
                    }

                    var spaseChance = random.Next(0, 7);
                    if (spaseChance / 3 == 0)
                    {
                        exercizeText += ' ';
                    }
                }
            }

            return new ExercizeSendDto()
            {
                IdDifficultyLevel = difficultyLevelId,
                ListOfZones = difficultyLevel.ListOfZones,
                Text = exercizeText,
                CountOfErrors = difficultyLevel.CountOfErrors,
                MaxTime = exercizeText.Length + exercizeText.Length / rows.Count
            };
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<ExercizeNamesDto>> GetExercizeNames()
        {
            var exercizeNamesDto = new List<ExercizeNamesDto>();
            var exercizes = await _exercizeRepository.GetExercizes();
            foreach (var exercize in exercizes)
            {
                exercizeNamesDto.Add(_mapper.Map<ExercizeNamesDto>(exercize));
            }
            return exercizeNamesDto;
        }
    }
}
