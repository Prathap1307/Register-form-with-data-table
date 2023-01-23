import React,{useState} from 'react';
import "./studentform.css";
import Branch from "./Branch"


function Studentform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const [degree, setDegree] = useState("");
  const [branch, setBranch] = useState("");

  const handleSubmit = (e) => {
    if (!name || !email || !dob || !degree || !branch){
      alert("please fill all the details")
    }else{
      e.preventDefault();
      const table = document.getElementById("table-data");
      const newRow = table.insertRow();
      newRow.innerHTML = `<td>${name}</td>
                         <td>${email}</td>
                         <td>${dob}</td>
                         <td>${degree}</td>
                         <td>${branch}</td>`;
  
    setName("");
    setEmail("");
    setDOB("");
    setDegree("");
    setBranch("");
    }
  }


  return (
    <div className='form'>
        <div className='form1'>
        <form className='studentforminput' onSubmit={handleSubmit}>
          <label className='register'>Register</label>
            <input className='name' value={name} type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}></input> 
            <input className='email' type="email" placeholder='E-Mail' onChange={(e) => setEmail(e.target.value)}></input>
            <label>DOB</label>
            <input className='DOB' type="date" placeholder='DOB' onChange={(e) => setDOB(e.target.value)}></input>
            <input className='Degree' type="text" placeholder='Degree' onChange={(e) => setDegree(e.target.value)}></input>
            <Branch onSelect={(value) => setBranch(value)}/>
            <button className='Submit' type='submit'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Studentform

