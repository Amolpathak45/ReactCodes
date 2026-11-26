import useCounter from '../src/useCounter'

const Counters = () => {
  const { count, increment, decrement, reset } = useCounter()

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counters