using System;
using System.Linq;
using System.Threading.Tasks;
using KeyTrainer.Contracts;
using KeyTrainer.Dto;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<IActionResult> Register(UserDto userData)
        {
            await _userBusiness.Register(userData);
            if (_userBusiness.GetErrors.Any())
            {
                return StatusCode(500, _userBusiness.GetErrors);
            }

            return Ok();
        }

        /// <summary>
        /// Авторизовать пользователя
        /// </summary>
        /// <param name="userData">Данные пользователя</param>
        /// <exception cref="Exception">Исключение: пользователь не найден</exception>
        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(UserDto userData)
        {
            var user = await _userBusiness.Authorize(userData);
            if (_userBusiness.GetErrors.Any())
            {
                return StatusCode(500, _userBusiness.GetErrors);
            }

            return Ok(user);
        }

        /// <summary>
        /// Получить логины пользователей для выбора статистики 
        /// </summary>
        /// <returns>список ДТО логинов пользователей</returns>
        [HttpGet]
        [Route("GetLogins")]
        public async Task<IActionResult> GetLogins()
        {
            var users = await _userBusiness.GetLogins();
            if (_userBusiness.GetErrors.Any())
            {
                return StatusCode(500, _userBusiness.GetErrors);
            }

            return Ok(users);
        }
    }
}
