import { memo } from 'react'
import GroupBar from './groupbar'
const Sidebar = memo(({props,setindex,popup,index})=>{
    return(
        <div className='sidebar'>
            <header>
                <h1>Pocket Notes</h1>
            </header>
            <div className='grouplist'>
                {props.map((val)=><GroupBar props ={val} setindex =  {setindex} index={index}/>)}
                <button className='floatingbutton' onClick={popup}>+</button>
            </div>
        </div>
    )
})

export default Sidebar;