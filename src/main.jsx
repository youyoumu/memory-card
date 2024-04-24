import React from 'react'
import ReactDOM from 'react-dom/client'
import MemoryCard from './components/MemoryCard.jsx'
import './index.css'

import AnilistApi from './anilistApi.js'
const anilistApi = new AnilistApi()

async function fetchAndRender() {
  await anilistApi.fetchData()
  anilistApi.logData()
  root.render(
    <React.StrictMode>
      <MemoryCard data={anilistApi.data} />
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div>loading..</div>
  </React.StrictMode>
)

fetchAndRender()
