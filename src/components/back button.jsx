import {GoArrowLeft} from "react-icons/go";
function changeindex(){
    let a=document.getElementsByClassName("sidebar")
    a[0].style.zIndex = 3
}
const BackButton = React.memo(()=>{
    return (screen.width<=600)?(
        <GoArrowLeft onClick={changeindex}>
        </GoArrowLeft>
    ):""
})

export default BackButton;