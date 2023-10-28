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
        public async Task<IEnumerable<ExercizeSendDto>> GetExercizes()
        {
            return await _exercizeRepository.GetExercizes();
        }

        /// <inheritdoc/>
        public async Task<ExercizeFullDto> GetExercizeById(int id)
        {
            return await _exercizeRepository.GetExerciseById(id);
        }

        /// <inheritdoc/>
        public async Task<DifficultyLevelFullDto> GetDifficultyLevelById(int id)
        {
            return await _exercizeRepository.GetDifficultyLevelById(id);
        }
    }
}
