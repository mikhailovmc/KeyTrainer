using AutoMapper;
using KeyTrainer.Contracts;
using KeyTrainer.Dto;
using KeyTrainer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace KeyTrainer.Business
{
    /// <summary>
    /// Сервис для пользователей
    /// </summary>
    public class UserBusiness : IUserBusiness
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private List<string> _errors;

        public UserBusiness(
            IUserRepository userRepository,
            IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _errors = new List<string>();
        }

        /// <inheritdoc/>
        public IEnumerable<string> GetErrors { get { return _errors; } }

        /// <inheritdoc/>
        public async Task Register(UserDto userDto)
        {
            if (!ValidateUser(userDto))
            {
                return;
            }

            if (await _userRepository.CheckUserLogin(userDto.Login))
            {
                _errors.Add("Ошибка 22 - Пользователь с таким логином уже зарегистрирован");
                return;
            }

            var oldUser = await _userRepository.GetUser(userDto);
            if (oldUser != null)
            {
                _errors.Add("Ошибка 5 - Пользователь с такими же учетными данными уже существует в системе");
                return;
            }

            var user = _mapper.Map<User>(userDto);
            await _userRepository.SaveUser(user);
        }

        /// <inheritdoc/>
        public async Task<UserDto> Authorize(UserDto userDto)
        {
            if (userDto.Login == "admin" && userDto.Password == "admin")
            {
                userDto.Id = null;
                return userDto;
            }
            else
            {
                if (!ValidateUser(userDto))
                {
                    return null;
                }

                var user = await _userRepository.GetUser(userDto);
                if (user == null)
                {
                    _errors.Add("Ошибка 6 - Пользователь не найден");
                }

                return _mapper.Map<UserDto>(user);
            }
        }

        /// <summary>
        /// Проверить поля пользователя
        /// </summary>
        /// <param name="userDto">ЖТО пользователя для проверкм</param>
        /// <returns>Результат проверки</returns>
        public bool ValidateUser(UserDto userDto)
        {
            if (userDto.Login.Length < 4 || userDto.Login.Length > 8)
            {
                _errors.Add("Ошибка 1 - Неправильная длина логина [4, 8]");
            }

            if (userDto.Password.Length < 4 || userDto.Password.Length > 10)
            {
                _errors.Add("Ошибка 2 - Неправильная длина пароля [4, 10]");
            }

            string pattern = @"^(?=.*[a - z])(?=.*[A - Z])(?=.*[0 - 9])(?=.*[^\w\s]).{4,10}";
            Regex regex = new Regex(pattern);

            if (regex.IsMatch(userDto.Login))
            {
                _errors.Add("Ошибка 3 - Логин должен содержать символы латинского алфавита, хотя бы 1 заглавный и 1 спец. символы");
            }

            if(regex.IsMatch(userDto.Password))
            {
                _errors.Add("Ошибка 4 - Пароль должен содержать символы латинского алфавита, хотя бы 1 заглавный и 1 спец. символы");
            }

            if (_errors.Any())
            {
                return false;
            }

            return true;
        }
    }
}
