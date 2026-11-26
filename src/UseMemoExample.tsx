import  { useMemo, useState } from 'react'

const UseMemoExample = () => {
  const [number, setNumber] = useState<number>(5)
  const [count, setCount] = useState<number>(0)

  const square = useMemo(() => {
    console.log('Calculating square...')

    return number * number
  }, [number])

  return (
    <div>
      <h2>useMemo Example</h2>

      <h3>Number: {number}</h3>
      <h3>Square: {square}</h3>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <hr />

      <h3>Counter: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>
    </div>
  )
}

export default UseMemoExample