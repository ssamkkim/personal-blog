import React, { useState } from 'react'

function Folder({ name, children }) {
  const [ isOpen, setIsOpen ] = useState(true); 
  const handleToggle = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div key={name}>
      <div className="folder-label" onClick={handleToggle}>
        <span>{name}</span>
      </div>
      <div>{isOpen ? children : null}</div>
    </div>
  );

}

export default Folder;