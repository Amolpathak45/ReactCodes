import { useCallback, useState } from 'react'

const UseCallbackExample = () => {
  const [count, setCount] = useState<number>(0)

  const handleClick = useCallback(() => {
    console.log('Button clicked!')
  }, [])

  return (
    <div>
      <h2>useCallback Example</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  )
}

export default UseCallbackExample