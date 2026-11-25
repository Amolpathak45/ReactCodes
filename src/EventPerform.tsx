const EventPerform = () => {

    const handleClick=()=>{
        alert("button cick")
    }
  return (
    <div>

        <h2>button clicked event</h2>

        <button onClick={handleClick}>click me</button>
      
    </div>
  )
}

export default EventPerform
