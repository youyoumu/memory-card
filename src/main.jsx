import React from 'react'
import ReactDOM from 'react-dom/client'
import MemoryCard from './components/MemoryCard.jsx'
import './index.css'

import AnilistApi from './anilistApi.js'
let anilistApi = new AnilistApi()

async function fetchAndRender(resetCallback) {
  await anilistApi.fetchData()
  anilistApi.logData()
  const characters = anilistApi.data.data.Media.characters.nodes
  root.render(
    <React.StrictMode>
      <MemoryCard characters={characters} />
      <div className="w-full flex justify-center my-6 join">
        <input
          id="anilist-id"
          type="text"
          placeholder="Anilist anime id"
          className="input input-bordered w-full max-w-xs join-item"
        />
        <button
          className="btn btn-primary join-item"
          onClick={() =>
            resetCallback(document.getElementById('anilist-id').value)
          }
        >
          Reset
        </button>
      </div>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div>loading..</div>
  </React.StrictMode>
)

const resetCallback = (id) => {
  anilistApi = new AnilistApi(id)
  fetchAndRender(resetCallback)
}

fetchAndRender(resetCallback)
