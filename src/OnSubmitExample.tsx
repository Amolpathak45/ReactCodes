import React, { useState } from 'react'

const OnSubmitExample = () => {

  const [name, setName] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    alert(`Welcome ${name}!`)
  }

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  )
}

export default OnSubmitExample