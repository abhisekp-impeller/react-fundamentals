// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()

  const [username, setUsername] = React.useState('')
  const [error, setError] = React.useState(null)

  const handleSubmit = ev => {
    ev.preventDefault()
    const username = inputRef.current.value
    onSubmitUsername(username)
  }

  const handleChange = ev => {
    const username = ev.target.value
    const isValid = username === username.toLowerCase()

    if (!isValid) {
      setError('Username must be lowercase')
    } else {
      setError(null)
    }

    setUsername(username.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={inputRef}
          id="username"
          type="text"
          value={username}
          onChange={handleChange}
        />
        <p role="alert">{error}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
