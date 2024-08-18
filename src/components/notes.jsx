import DefaultDisplay from "./defaultdisplay";
import Notesdisplay from "./notesdisplay";
import { memo } from 'react'
const Notes = memo(({group,notes,activeindex,setnotes})=>{
const addnotes = (a,i,d)=>{
        let temp = notes
        temp[i].notes = [...temp[i].notes,a]
        temp[i].date = [...temp[i].date,d]
        setnotes(temp)
    }
    return(
        <div className="notes">
            <DefaultDisplay props = {activeindex}/>
            {group.map((val,index)=><Notesdisplay props = {val} props2={notes[index]} activeindex = {activeindex} setnotes = {addnotes}/>)}
        </div>
    )
})

export default Notes