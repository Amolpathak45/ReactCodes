type studentprop={
    name:string
}
const Student = ({name}:studentprop) => {
  return (
    <div>
        <h1>{name}</h1>
      
    </div>
  )
}

export default Student
