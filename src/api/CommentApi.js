// const token = TOKEN.ENV;
const api = 'http://4.221.173.63:8001/api/'



export const allcomment = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const TokenValue = user.token
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        }

    }
    const result = await fetch(api + 'comments/', options)
        .then((response) => response.json())
        .then((data) => data)
    return result
}


export const onecomment = async (id) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const TokenValue = user.token
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        }
    }
    const result = await fetch('http://127.0.0.1:8000/api/comments/' + id, options)
        .then((response) => response.json())
        .then((data) => data)
    return result
}


export const createcomment = async (content, post_id, username, parent_id) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const TokenValue = user.token

    let options;
    if (parent_id === null) {
        options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + TokenValue
            },
            body: JSON.stringify({
                content: content,
                post_id: post_id,
                username: username
            })
        }


    } else {
        options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + TokenValue
            },
            body: JSON.stringify({
                content: content,
                post_id: post_id,
                username: username,
                parent_id: parent_id
            })
        }



    }

    const result = await fetch('http://127.0.0.1:8000/api/comments/', options)
        .then((response) => response.json())
        .then((data) => data)
    return result
}

export const updatecomment = async (content, id) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const TokenValue = user.token
    const options = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        },
        body: JSON.stringify({
            content: content
        })
    }
    const result = await fetch('http://127.0.0.1:8000/api/comments/' + id, options)
        .then((response) => response.json())
        .then((data) => data)
    return result
}


export const removecomment = async (id) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const TokenValue = user.token
    const options = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        }
    }
    const result = await fetch(api + 'comments/' + id, options)
        .then((response) => response.json())
        .then((data) => data)
    return result
}