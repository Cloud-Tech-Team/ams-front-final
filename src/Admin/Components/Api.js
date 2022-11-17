import React from 'react'


const appno = localStorage.getItem('user_id')

const api = {
    heroku : {
        autofill : 'https://ams-backend-api.herokuapp.com/user/nri/application',
        patch : 'https://ams-backend-api.herokuapp.com/user/nri/application/'+appno
    }
}

export default api
