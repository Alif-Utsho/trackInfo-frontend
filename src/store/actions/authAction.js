import Axios from 'axios'
//import { USERS_ERROR } from './types'

export const login = (user, history) => {
    return dispatch => {
        Axios.post('/api/users/login', user)
            .then(res => {
                dispatch({
                    type: 'USERS_ERROR',
                    payload: {
                        error: {},
                        message: res.data.message
                    }
                })
                history.push('/')
            })
            .catch(err => {
                dispatch({
                    type: 'USERS_ERROR',
                    payload: {
                        error: err.response.data
                    }
                })
            })
    }
}