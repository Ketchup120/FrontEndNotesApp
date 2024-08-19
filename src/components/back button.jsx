import {GoArrowLeft} from "react-icons/go";
import { memo } from 'react'
function changeindex(){
    let a=document.getElementsByClassName("sidebar")
    a[0].style.zIndex = 3
}
const BackButton = memo(()=>{
    return(
        <GoArrowLeft onClick={changeindex} className="backbutton">
        </GoArrowLeft>
    )
})

export default BackButton;