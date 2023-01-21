import config from '../../config'

function handleAuth (response) {
  switch (response.status) {
    case 422: throw Error(response.statusText)
    case 401: throw Error(response.statusText)
    case 403: window.location.href = '/login'; break
  }
  return response.json()
}

export default {
  get (url) {
    const options = {
      method: 'GET',
      credentials: 'include'
    }
    return fetch(config.service.baseUrl + url, options)
      .then(handleAuth)
  },
  delete (url) {
    const options = {
      method: 'DELETE',
      credentials: 'include'
    }
    return fetch(config.service.baseUrl + url, options)
      .then(handleAuth)
  },
  post (url, body) {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(body)
    }
    return fetch(config.service.baseUrl + url, options)
      .then(handleAuth)
  },
  put (url, body) {
    const options = {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(body)
    }
    return fetch(config.service.baseUrl + url, options)
      .then(handleAuth)
  },
  patch (url, body) {
    const options = {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(body)
    }
    return fetch(config.service.baseUrl + url, options)
      .then(handleAuth)
  }
}
