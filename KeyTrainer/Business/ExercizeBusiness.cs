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

            var difficultyLevel = _mapper.Map<DifficultyLevel>(difficultyLevelFullDto);
            await _exercizeRepository.UpdateDifficultyLevel(difficultyLevel);
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

            foreach (var zone in exercizeSendDto.ListOfZones)
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

            var exercize = _mapper.Map<Exercize>(exercizeSendDto);
            await _exercizeRepository.UpdateExercize(exercize);
            var newExercize = await _exercizeRepository.GetExerciseById(exercize.Id);
            return _mapper.Map<ExercizeFullDto>(newExercize);
        }

        /// <inheritdoc/>
        public async Task<ExercizeSendDto> GenerateExercize()
        {
            var keyboardZones = new Dictionary<string, char[]>()
            {
                {
                    "1", new char[] {'1', '2', '0', '-', '=',
                                   'й', 'з', 'х', 'ъ',
                                   'ф', 'ж', 'э',
                                   'я', '.'}
                },

                {
                    "2", new char[] { '3', '9',
                                    'ц', 'щ',
                                    'ы', 'д',
                                    'ч', 'ю'}
                },

                {
                    "3", new char[] { '4', '8',
                                    'у', 'ш',
                                    'в', 'л',
                                    'с', 'б'}
                },

                {
                    "4", new char[] { '5', '6', '7',
                                    'к', 'е', 'н', 'г',
                                    'а', 'п', 'р', 'о',
                                    'м', 'и', 'т', 'ь'}

                },

                {
                    "5", new char[] { ' ' }
                }
            };

            Random random = new Random();
            var difficultyLevelId = random.Next(1, 4);
            var difficultyLevel = await _exercizeRepository.GetDifficultyLevelById(difficultyLevelId);

            var exercizeText = "";
            while (exercizeText.Length < difficultyLevel.MaxLength - difficultyLevel.ListOfZones.Length)
            {
                foreach (var zone in difficultyLevel.ListOfZones)
                {
                    keyboardZones.TryGetValue(zone, out var keys);
                    exercizeText += keys[random.Next(0, keys.Length)];
                }
            }

            return new ExercizeSendDto()
            {
                IdDifficultyLevel = difficultyLevelId,
                ListOfZones = difficultyLevel.ListOfZones,
                Text = exercizeText,
                CountOfErrors = difficultyLevel.CountOfErrors,
                MaxTime = exercizeText.Length
            };
        }
    }
}
