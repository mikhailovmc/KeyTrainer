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
    /// Сервис для статистики
    /// </summary>
    public class StatisticsBusiness : IStatisticsBusiness
    {
        private readonly IStatisticsRepository _statisticsRepository;
        private readonly IMapper _mapper;

        public StatisticsBusiness(
            IStatisticsRepository statisticsRepository,
            IMapper mapper)
        {
            _statisticsRepository = statisticsRepository;
            _mapper = mapper;
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<StatisticsFullDto>> GetStatistics()
        {
            var statisticsDto = new List<StatisticsFullDto>();
            var statistics = await _statisticsRepository.GetStatistics();
            foreach (var stats in statistics)
            {
                statisticsDto.Add(_mapper.Map<StatisticsFullDto>(stats));
            }
            return statisticsDto;
        }

        /// <inheritdoc/>
        public async Task<StatisticsFullDto> GetStatisticsById(int id)
        {
            var statistics = await _statisticsRepository.GetStatisticsById(id);
            return _mapper.Map<StatisticsFullDto>(statistics);
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<StatisticsFullDto>> GetStatisticsByUserId(int id)
        {
            var statisticsDto = new List<StatisticsFullDto>();
            var userStatistics = await _statisticsRepository.GetStatisticsByUserId(id);
            foreach (var stats in userStatistics)
            {
                statisticsDto.Add(_mapper.Map<StatisticsFullDto>(stats));
            }
            return statisticsDto;
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<StatisticsFullDto>> GetStatisticsByExercizeId(int id)
        {
            var statisticsDto = new List<StatisticsFullDto>();
            var exercizeStatistics = await _statisticsRepository.GetStatisticsByExercizeId(id);
            foreach (var stats in exercizeStatistics)
            {
                statisticsDto.Add(_mapper.Map<StatisticsFullDto>(stats));
            }
            return statisticsDto;
        }
    }
}
