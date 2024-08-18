import { initials } from "../helpers/functions";
import { memo } from 'react'
const GroupBar =memo(({props,setindex,index})=>{
    const grpdisp = ()=>{
        if(screen.width<=600)
        {
            let a=document.getElementsByClassName("sidebar")
            a[0].style.zIndex = 1
            setindex(props.id)
        }
        else
            setindex(props.id)
        }
    return(
        <div className="groupbar" style={{backgroundColor:index==props.id?"#2F2F2F2B":"white"}} onClick={grpdisp}>
            <div  id={props.id} className="pfp" style={{backgroundColor : props.colour}}>
                {initials(props.name)}
            </div>
            <div>
                {props.name}
            </div>
            
        </div>
    )
})

export default GroupBar;