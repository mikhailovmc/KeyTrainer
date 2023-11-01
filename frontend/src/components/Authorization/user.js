import { setUser } from "./../../reducers/userReducer"

export function login() {
    // const { data } = await axios.post (
    //     'https://localhost:5001/api/User/Login',
    //     {login, password},
    //     {
    //         headers: {'Content-Type': 'application/json'},
    //     }
    // );

    // return data;
    return async dispatch => {
        try {
            const responce = await axios.post('https://localhost:5001/api/User/Registrations', {
            login,
            password
            })
            dispatch(setUser(responce.data.user))
            console.log(responce.data)
        } catch (error) {
            alert(error.responce.data.message)
        }
    }
    
}