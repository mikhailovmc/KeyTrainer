using System;
using System.Threading.Tasks;
using KeyTrainer.Contracts;
using KeyTrainer.Dto;
using Microsoft.AspNetCore.Mvc;
//using KeyTrainer.Business;

namespace KeyTrainer.Controllers
{
    /// <summary>
    /// Контроллер для работы с пользователями
    /// </summary>
    [Route("api/User")]
    public class UserController : ControllerBase 
    {
        private readonly IUserBusiness _userBusiness;

        public UserController(IUserBusiness userBusiness)
        {
            _userBusiness = userBusiness;
        }

        /// <summary>
        /// Зарегистрировать пользователя
        /// </summary>
        /// <param name="userData">Данные пользователя</param>
        /// <exception cref="Exception">Исключение: уже зарегистрированный пользователь</exception>
        [HttpPost]
        [Route("Register")]
        public async Task Register(UserDto userData)
        {
            var user = await _userBusiness.Authorize(userData);
            if (user != null)
                throw new Exception("Данный пользователь уже зарегистрирован!");
            await _userBusiness.Register(userData);
        }

        /// <summary>
        /// Авторизовать пользователя
        /// </summary>
        /// <param name="userData">Данные пользователя</param>
        /// <exception cref="Exception">Исключение: пользователь не найден</exception>
        [HttpPost]
        [Route("Login")]
        public async Task<UserDto> Login(UserDto userData)
        {
            var user = await _userBusiness.Authorize(userData);
            if (user == null)
                throw new Exception("Пользователь не найден!");
            return user;
        }
    }
}
