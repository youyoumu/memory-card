export default class AnilistApi {
  constructor(id = 21034) {
    this.data = null
    const query = `
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      english
      native
    }
    characters (sort: [ROLE]) {
      nodes {
        id
        name {
          full
        }
        image {
          large
        }
      }
    }
  }
}
`
    const variables = {
      id: id
    }

    const url = 'https://graphql.anilist.co',
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          query: query,
          variables: variables
        })
      }

    fetch(url, options)
      .then(handleResponse)
      .then((data) => handleData(data, this))
      .catch(handleError)

    function handleResponse(response) {
      return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json)
      })
    }

    function handleData(data, obj) {
      obj.data = data.data.Media
      console.log(obj.data)
    }

    function handleError(error) {
      alert('Error, check console')
      console.error(error)
    }
  }
}
