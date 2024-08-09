
const api = 'http://4.221.173.63:8001/api/'

export const editprofile = async (name, email, password) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const TokenValue = user.token
    let options

    options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    }

  
    const result = await fetch(api + 'users', options)
            .then((response) => response.json())
            .then((data) => data)
    return result
    }


