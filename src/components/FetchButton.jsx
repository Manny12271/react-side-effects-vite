function FetchButton({ fetchJoke, loading }) {
  return (
    <button onClick={fetchJoke} disabled={loading}>
      Get a New Joke
    </button>
  )
}

export default FetchButton