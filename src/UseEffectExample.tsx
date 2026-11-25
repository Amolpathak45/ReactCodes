import  { useEffect, useState } from 'react'

const UseEffectExample = () => {

  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default UseEffectExample