
const api = 'http://4.221.173.63:8001/api/'

export const register = async (name, email, age, password) => {
  let options
  if (age >= 13 && age <= 35) {
    options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        age: age,
        password: password
      })
    }
  }

  const result = await fetch(api + 'register/', options)
    .then((response) => response.json())
    .then((data) => data)
  return result
}


export const login = async (email, password) => {
  let options

  options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  }

  const result = await fetch(api + 'login/', options)
    .then((response) => response.json())
    .then((data) => data)

    localStorage.setItem("user",JSON.stringify(result))
  return result
}

export const logoutapi = async () => {
  const user = JSON.parse(localStorage.getItem('user'))
  let options
 
  options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer '+ user.token
    },
  }

  const result = await fetch(api + 'logout/', options)
    .then((response) => response.json())
    .then((data) => data)
    
  return result
}


