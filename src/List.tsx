

// const List = () => {

//     let names:string[] =["Amol","Sakshi","Yash","Nikunja"]
//   return (
//     <div>
//         <h1>Best Fours</h1>

//         {names.map((friends)=>(
//             <p>{friends}</p>
//         ))}

      
//     </div>
//   )
// }

// export default List


const App = () => {
  const students: string[] = [
    "Rahul",
    "Amit",
    "Priya",
    "Sneha"
  ]

  return (
    <div>
      <h1>Hostel Students</h1>

      {students.map((student, index) => (
        <p key={index}>{student}</p>
      ))}
    </div>
  )
}

export default App
