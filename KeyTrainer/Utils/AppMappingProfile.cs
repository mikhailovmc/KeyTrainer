using AutoMapper;
using KeyTrainer.Dto;
using KeyTrainer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeyTrainer.Utils
{
    /// <summary>
    /// Профиль для automapper
    /// </summary>
    public class AppMappingProfile : Profile
    {
        public AppMappingProfile()
        {
            CreateMap<UserDto, User>()
                .ForMember(dest => dest.Login, opt => opt.MapFrom(src => src.Login))
                .ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.Password))
                .ReverseMap();

            CreateMap<Exercize, ExercizeFullDto>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Text, opt => opt.MapFrom(src => src.Text))
                .ForMember(dest => dest.CountOfErrors, opt => opt.MapFrom(src => src.CountOfErrors))
                .ForMember(dest => dest.MaxTime, opt => opt.MapFrom(src => src.MaxTime))
                .ForMember(dest => dest.IdDifficultyLevel, opt => opt.MapFrom(src => src.IdDifficultyLevel));

            CreateMap<DifficultyLevel, DifficultyLevelFullDto>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.MaxLength, opt => opt.MapFrom(src => src.MaxLength))
                .ForMember(dest => dest.CountOfErrors, opt => opt.MapFrom(src => src.CountOfErrors))
                .ForMember(dest => dest.ListOfZones, opt => opt.MapFrom(src => src.ListOfZones));
        }
    }
}
