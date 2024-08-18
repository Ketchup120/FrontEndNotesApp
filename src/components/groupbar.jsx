import { initials } from "../helpers/functions";
const GroupBar = React.memo(({props,setindex})=>{
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
        <div className="groupbar" onClick={grpdisp}>
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