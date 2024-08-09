


export const allpost = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const TokenValue = user.token
    const options = {
        method: 'GET',
        headers: {
            'content-Type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        }
    }
    const result = await fetch('http://4.221.173.63:8001/api/posts/', options)
        .then((reponse) => reponse.json())
        .then((data) => data)

    return result
}



export const onepost = async (id) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const TokenValue = user.token
    const options = {
        method: 'GET',
        headers: {
            'content-Type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        }
    }
    const result = await fetch('http://4.221.173.63:8001/api/posts/' + id, options)
        .then((reponse) => reponse.json())
        .then((data) => data)
    return result
}



export const createpost = async (url, user_id, content, category_id = null, notation = null) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const TokenValue = user.token
    let options;
    if (category_id == null) {
        options = {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                'Authorization': 'Bearer ' + TokenValue
            },
            body: JSON.stringify({
                url: url,
                user_id: user_id,
                content: content

            })
        }

    } else {
        options = {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                'Authorization': 'Bearer ' + TokenValue
            },
            body: JSON.stringify({
                url: url,
                user_id: user_id,
                content: content,
                category_id: category_id

            })
        }

    }

    


    const result = await fetch('http://4.221.173.63:8001/api/posts/', options)
        .then((reponse) => reponse.json())
        .then((data) => data)
    return result
}





export const updatepost = async (url, content, id, category_id) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const TokenValue = user.token
    let options;
    if (category_id == null) {
        options = {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json',
                'Authorization': 'Bearer ' + TokenValue
            },
            body: JSON.stringify({
                url: url,
                content: content


            })
        }

    } else {
        options = {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json',
                'Authorization': 'Bearer ' + TokenValue
            },
            body: JSON.stringify({
                url: url,
                content: content,
                category_id: category_id


            })
        }

    }

    const result = await fetch('http://4.221.173.63:8001/api/posts/' + id, options)
        .then((reponse) => reponse.json())
        .then((data) => data)
    return result
}




export const removepost = async (id) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const TokenValue = user.token

    const options = {
        method: 'DELETE',
        headers: {
            'content-Type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        }
    }
    const result = await fetch('http://4.221.173.63:8001/api/posts/' + id, options)
        .then((reponse) => reponse.json())
        .then((data) => data)
    return result
}
