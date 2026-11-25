
    type studentcardprops ={
        name:string
        department:string
        roomnumber:number

    }


const Props = (props:studentcardprops) => {
  return (

    <div>
        <h2>{props.name}</h2>
        <p>Department:{props.department}</p>
        <p>RoomNo:{props.roomnumber}</p>
      
    </div>
  )
}

export default Props
