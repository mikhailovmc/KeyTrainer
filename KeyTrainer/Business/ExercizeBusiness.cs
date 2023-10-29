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
    }
}
