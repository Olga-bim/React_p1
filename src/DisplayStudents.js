import React from 'react'

const DisplayStudents = (props) => {
    console.log(props);

  return (
    <div>
    <hr></hr>
    email: <p style={{color:"red"}}>{props.students.email}</p>
    <br></br>
    Age: {props.students.age}
    </div> 
  )
}

export default DisplayStudents