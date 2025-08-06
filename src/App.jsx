import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

const JOKE_API = 'https://v2.jokeapi.dev/joke/Programming?type=single'

function App() {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchJoke = async () => {
    setLoading(true)
    try {
      const res = await fetch(JOKE_API)
      const data = await res.json()
      setJoke(data.joke)
    } catch (err) {
      setJoke('Failed to fetch joke. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div className="app" style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={joke} loading={loading} />
      <FetchButton fetchJoke={fetchJoke} loading={loading} />
    </div>
  )
}

export default App