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
        private readonly IExercizeRepository _exercizeRepository;
        private readonly IMapper _mapper;

        public StatisticsBusiness(
            IStatisticsRepository statisticsRepository,
            IExercizeRepository exercizeRepository,
            IMapper mapper)
        {
            _statisticsRepository = statisticsRepository;
            _exercizeRepository = exercizeRepository;
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

        /// <inheritdoc/>
        public async Task<StatisticsFullDto> AddStatistics(StatisticsSendDto statisticsSendDto)
        {
            var exercize = await _exercizeRepository.GetExerciseById(statisticsSendDto.IdExercize);

            var lengthPercentage = (int)(((double)statisticsSendDto.Length / (double)exercize.Text.Length) * 100);

            var accuracy = (int)((1 - ((double)statisticsSendDto.CountOfErrors / (double)exercize.Text.Length)) * 100);

            int typingSpeed = (int)((double)exercize.Text.Length / (double)statisticsSendDto.Time) * 60;

            var statisticsFullDto = new StatisticsFullDto
            {
                Status = statisticsSendDto.Status,
                LengthPercentage = lengthPercentage,
                Accuracy = accuracy,
                TypingSpeed = typingSpeed,
                IdUser = statisticsSendDto.IdUser,
                IdExercize = statisticsSendDto.IdExercize
            };

            var statistics = _mapper.Map<Statistics>(statisticsFullDto); 
            await _statisticsRepository.AddStatistics(statistics);

            var newStatistics = await _statisticsRepository.GetStatisticsById(statistics.Id);
            return _mapper.Map<StatisticsFullDto>(newStatistics);
        }

        /// <inheritdoc/>
        public async Task<GraphicDto> GetGraphic(int id)
        {
            var userStatistics = await _statisticsRepository.GetStatisticsByUserId(id);
            var statistics = userStatistics.OrderByDescending(us => us.IdExercize);
            
            var exercizeIds = new List<int>();
            var x = new List<int>();
            var y = new List<int>();

            foreach (var stats in statistics)
            {
                if (exercizeIds.Contains(stats.IdExercize))
                {
                    continue;
                }

                x.Add(stats.IdExercize);
                y.Add(stats.TypingSpeed);

                exercizeIds.Add(stats.IdExercize);
            }

            x.Reverse();
            y.Reverse();

            return new GraphicDto
            {
                X = x.ToArray(),
                Y = y.ToArray()
            };
        }

        /// <inheritdoc/>
        public async Task<DiagramDto> GetDiagram(int id)
        {
            var userStatistics = await _statisticsRepository.GetStatisticsByUserId(id);
            var statistics = userStatistics.OrderByDescending(us => us.Id);

            var exercizeIds = new List<int>();

            foreach (var stats in statistics)
            {
                if (exercizeIds.Contains(stats.IdExercize))
                {
                    continue;
                }

                exercizeIds.Add(stats.IdExercize);
            }

            var exercizes = await _exercizeRepository.GetExercizes();

            var percentage = (int)(((double)exercizeIds.Count / (double)exercizes.Count()) * 100);

            return new DiagramDto
            {
                X = percentage
            };
        }
    }
}
