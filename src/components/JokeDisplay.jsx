function JokeDisplay({ joke, loading }) {
  return <p>{loading ? 'Loading...' : joke}</p>
}

export default JokeDisplay