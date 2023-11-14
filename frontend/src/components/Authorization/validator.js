export const checkPassword = (password) => {
    const regex = /^[a-z0-9_-]{4,10}$/;
        if (regex.test(password)) {
            return true;
        } else {
            alert('Пароль должен состоять из англ.букв от 4 до 10');
            return false;
        }
}

export const checkLogin = (login) => {
    const regex = /^[a-z0-9_-]{4,10}$/;
        if(regex.test(login)) {
            console.log("прошло проверки", login)
            return true;
        } else {
            console.log("не прошло проверки")
            alert('Логин не соответсвует', login)
            return false;
        }  
}