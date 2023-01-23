import React, { useState } from 'react';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import DropDownlist from './DropDownlist';
import "./branch.css"

function Branch({onSelect}) {

  const [dropdown,setdropdown]= useState(false);
  const [persistedDropdowns, setPersistedDropdowns] = useState([]);
  const [selected, setSelected] = useState(null);

  const HandleDropDown = ()=>{
    if (dropdown===true){
      setdropdown(false)
    }else{
      setdropdown(true)
    }
  }
  const handleAdd = (newItem) => {
    setPersistedDropdowns([...persistedDropdowns, newItem])
  }

  const handleRemove = (id) => {
    setPersistedDropdowns(prev => prev.filter(item => item.id !== id))
  }

  const handleSelect = (value, id) => {
    setSelected(id);
    onSelect(value);
  };
  
  return  (
    <div>
      <div className='DropDown' onClick={HandleDropDown}>
        <p>Branch</p>
        <ArrowDropDownCircleIcon />
      </div>
      {dropdown && (
        <div className='drop-downlist'>
          <DropDownlist
            dropdowns={persistedDropdowns}
            selected={selected}
            onAdd={handleAdd}
            onRemove={handleRemove}
            onSelect={handleSelect}
          />
        </div>
      )}
    </div>
  );
}

export default Branch



