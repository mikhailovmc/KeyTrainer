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
        private readonly IExercizeRepository _exercizeRepository;
        private readonly IMapper _mapper;

        public ExercizeBusiness(
            IExercizeRepository exercizeRepository,
            IMapper mapper)
        {
            _exercizeRepository = exercizeRepository;
            _mapper = mapper;
        }

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
                return null;
            }

            oldDifficultyLevel.CountOfErrors = difficultyLevelFullDto.CountOfErrors;
            oldDifficultyLevel.MaxLength = difficultyLevelFullDto.MaxLength;
            oldDifficultyLevel.ListOfZones = difficultyLevelFullDto.ListOfZones.ToArray();

            await _exercizeRepository.UpdateDifficultyLevel(oldDifficultyLevel);
            var newDifficultyLevel = await _exercizeRepository.GetDifficultyLevelById(difficultyLevelFullDto.Id);
            return _mapper.Map<DifficultyLevelFullDto>(newDifficultyLevel);
        }

        /// <inheritdoc/>
        public async Task<ExercizeFullDto> AddExercize(ExercizeSendDto exercizeSendDto)
        {
            var difficultyLevel = await _exercizeRepository.GetDifficultyLevelById(exercizeSendDto.IdDifficultyLevel);

            if (difficultyLevel == null ||
                exercizeSendDto.Text.Length > difficultyLevel.MaxLength ||
                exercizeSendDto.CountOfErrors > difficultyLevel.CountOfErrors)
            {
                return null;
            }

            var listOfZones = exercizeSendDto.ListOfZones.First().Split(',');

            foreach (var zone in listOfZones)
            {
                if (!difficultyLevel.ListOfZones.Contains(zone))
                {
                    return null;
                }
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
                return null;
            }

            var difficultyLevel = await _exercizeRepository.GetDifficultyLevelById(exercizeSendDto.IdDifficultyLevel);

            if (difficultyLevel == null ||
                exercizeSendDto.Text.Length > difficultyLevel.MaxLength ||
                exercizeSendDto.CountOfErrors > difficultyLevel.CountOfErrors)
            {
                return null;
            }

            foreach (var zone in exercizeSendDto.ListOfZones)
            {
                if (!difficultyLevel.ListOfZones.Contains(zone))
                {
                    return null;
                }
            }

            oldExercize.CountOfErrors = exercizeSendDto.CountOfErrors;
            oldExercize.IdDifficultyLevel = exercizeSendDto.IdDifficultyLevel;
            oldExercize.MaxTime = exercizeSendDto.MaxTime;
            oldExercize.Text = exercizeSendDto.Text;

            await _exercizeRepository.UpdateExercize(oldExercize);
            var newExercize = await _exercizeRepository.GetExerciseById(oldExercize.Id);
            return _mapper.Map<ExercizeFullDto>(newExercize);
        }

        /// <inheritdoc/>
        public async Task<ExercizeSendDto> GenerateExercize()
        {
            var keyboardZones = new Dictionary<string, char[]>()
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
                        keyboardZones.TryGetValue(zone + row, out var keys);
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
    }
}
