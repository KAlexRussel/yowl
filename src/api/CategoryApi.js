

export const allcategories = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const TokenValue = user.token
    const options = {
        method: 'GET',
        headers: {
            'content-Type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        }
    }
    const result = await fetch('http://127.0.0.1:8000/api/categories', options)
        .then((reponse) => reponse.json())
        .then((data) => data)
    return result
}



export const onecategories = async (id) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const TokenValue = user.token
    const options = {
        method: 'GET',
        headers: {
            'content-Type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        }
    }
    const result = await fetch('http://127.0.0.1:8000/api/categories' + id, options)
        .then((reponse) => reponse.json())
        .then((data) => data)
    return result
}



export const createcategories = async (parent_id, name) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const TokenValue = user.token
    const options = {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        },
        body: JSON.stringify({
            parent_id: parent_id,
            name: name
        })
    }
    const result = await fetch('http://127.0.0.1:8000/api/categories', options)
        .then((reponse) => reponse.json())
        .then((data) => data)
    return result
}





export const updatecategories = async (parent_id, name, id) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const TokenValue = user.token
    const options = {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        },
        body: JSON.stringify({
            parent_id: parent_id,
            name: name
        })
    }
    const result = await fetch('http://127.0.0.1:8000/api/categories' + id, options)
        .then((reponse) => reponse.json())
        .then((data) => data)
    return result
}



export const removecategories = async (id) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const TokenValue = user.token
    const options = {
        method: 'DELETE',
        headers: {
            'content-Type': 'application/json',
            'Authorization': 'Bearer ' + TokenValue
        }
    }
    const result = await fetch('http://127.0.0.1:8000/api/categories' + id, options)
        .then((reponse) => reponse.json())
        .then((data) => data)
    return result
}
