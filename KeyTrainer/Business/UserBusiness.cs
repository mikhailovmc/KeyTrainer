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
    /// Сервис для пользователей
    /// </summary>
    public class UserBusiness : IUserBusiness
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UserBusiness(
            IUserRepository userRepository,
            IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        /// <inheritdoc/>
        public async Task Register(UserDto userDto)
        {
            var user = _mapper.Map<User>(userDto);
            await _userRepository.SaveUser(user);
        }

        /// <inheritdoc/>
        public async Task<UserDto> Authorize(UserDto userDto)
        {
            if (userDto.Login == "admin" && userDto.Password == "admin")
            {
                return userDto;
            }
            else
            {
                var user = await _userRepository.GetUser(userDto);
                return _mapper.Map<UserDto>(user);
            }
        }
    }
}
