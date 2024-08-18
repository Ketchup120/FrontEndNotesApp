import React, { useState } from 'react';

const Popup = React.memo(({toggle,addgroup,settoggle}) => {
    const [inputValue,setinputValue] = useState("")
    const [color,setColor] = useState("none")
    const handleGroupNameChange = (e) => {
        setinputValue(e.target.value);
    };

    const handleColorChange = (c) => {
        setColor(c);
    };

    const handleSubmit = () => {
        if(inputValue!=""&&color!="none")
        {
            addgroup(inputValue,color)
            settoggle()
            setinputValue("")
            setColor("none")
        }
    };

    return toggle ?(
        <div className='popupbackground' onClick={(e)=>{
            if(e.target.className === "popupbackground")
                settoggle()
            }}>
            <div className="popup">
                <h2>Create New Group</h2>
                <div>
                    Group Name : 
                    <input
                    type="text"
                    className='grpnameinput'
                    value={inputValue}
                    onChange={handleGroupNameChange}
                    placeholder="Enter group name"
                    />
                </div>
                <div>
                    <div className="color-selector">Choose Colour : 
                    {['#800080', '#D8BFD8', '#FFC0CB', '#ADD8E6', '#FFA500'].map((colorCode) => (
                        <div
                        key={colorCode}
                        className={`color-circle ${color === colorCode ? 'selected' : ''}`}
                        style={{ backgroundColor: colorCode}}
                        onClick={() => handleColorChange(colorCode)}
                        />
                    ))}
                    </div>
                </div>
                <div className='popupfooter'>
                <button onClick={handleSubmit} className='popupsubmit'>Create</button>
                </div>
            </div>
        </div>
    ): ""
    })

    export default Popup;
