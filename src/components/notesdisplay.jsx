import { initials } from "../helpers/functions"
import Note from "./note"
import { useState } from "react";
import BackButton from "./back button";
import {IoSend} from "react-icons/io5";
const Notesdisplay = React.memo(({props,props2,activeindex,setnotes})=>{
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleSubmit = () => {
        let d = new Date()
        setnotes(inputValue,props.id-1,d)
        setInputValue("")
      };
    return (activeindex == props.id)?(
        <div className="notesdisplay">
            <div className="notesbar">
                <BackButton/>
                <div className="pfp" style={{backgroundColor:props.colour}}>
                    {initials(props.name)}
                </div>
                <div>
                    {props.name}
                </div>
            </div>
            <div className="noteslist">
                {props2.notes.map((val,index)=><Note props ={val} date={props2.date[index]}/>)}
            </div>
            <div className="inputbox">
                <textarea className="textarea" placeholder="Enter Your Text Here ......" value={inputValue} onChange={handleInputChange}></textarea>
                <IoSend className = "submitbutton" style={{color:inputValue == ""?"gray":"#16008B", }}onClick={handleSubmit}></IoSend>
            </div>
        </div>
    ):""
})

export default Notesdisplay