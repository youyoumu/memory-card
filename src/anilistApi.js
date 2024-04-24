export default class AnilistApi {
  constructor(id = 21034) {
    this.data = null
    this.query = `
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
    this.variables = {
      id: id
    }

    this.url = 'https://graphql.anilist.co'
    this.options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        query: this.query,
        variables: this.variables
      })
    }
  }

  async fetchData() {
    await fetch(this.url, this.options)
      .then(this.handleResponse)
      .then((data) => this.handleData(data, this))
      .catch(this.handleError)
  }

  handleResponse(response) {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json)
    })
  }

  handleData(data, obj) {
    obj.data = data.data.Media
    console.log(obj.data)
  }

  handleError(error) {
    alert('Error, check console')
    console.error(error)
  }

  logData() {
    console.log(this.data)
  }
}
