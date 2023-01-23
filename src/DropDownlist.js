import React, { useState} from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import { Tooltip } from 'react-bootstrap';
import "./dropdownlist.css"

function DropDownlist({dropdowns,onAdd,onRemove,onSelect}) {
    const [inputvalue, setinputvalue] = useState("")
    const [searchTerm, setSearchTerm] = useState("");
    const [selected, setSelected] = useState(null);

    const add = ()=>{
        const input = prompt("Enter the word")
        if (input.length>=1){
            onAdd({id: uuidv4(), value: input});
        }else{
            alert("Empty spaces cannot be added as a Dropdown")
        }
    }

    const handleChange = (e)=>{
        setSearchTerm(e.target.value);
        setinputvalue(e.target.value)
    }


    const remove = (id) => {
        const response = window.confirm("Are you sure you want to delete it?");
        if (response===true){
            onRemove(id)
        }
    }
    const handleselect = (value,id)=>{
        setinputvalue(value)
        setSelected(id)
        onSelect(value,id)
    }

  return (
    <div>
    <div className='Search'>
    <Tooltip placement="top" overlay={<div>Add dropdown</div>}>
        <div className='addbtn' onClick={add}>
            <p>Add option</p>
            <AddIcon/>
        </div>
    </Tooltip>
    <input 
        onChange={handleChange}
        type="text" 
        value={inputvalue}
        placeholder='Search'
    />
    </div>
        {dropdowns
        .filter(dropdown => dropdown.value.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((dropdown)=>(
        <div key={dropdown.id} className='dropdown'>
            <Tooltip placement="top" overlay={<div>Delete</div>}>
                <span className='cancelicon' title='Delete' onClick={() => remove(dropdown.id)}>
                    <CancelIcon/>
                </span>
            </Tooltip>
            <p onClick={() => handleselect(dropdown.value,dropdown.id)} className={`individual-dropdown ${dropdown.id === selected ? 'dropdown-selected' : ''}`}>{dropdown.value}</p>
        </div>
        ))}
    </div>
    )
}

export default DropDownlist



