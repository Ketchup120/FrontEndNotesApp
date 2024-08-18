import React from 'react';
import GroupBar from './groupbar'
const Sidebar = React.memo(({props,setindex,popup})=>{
    return(
        <div className='sidebar'>
            <header>
                <h1>Pocket Notes</h1>
            </header>
            <div className='grouplist'>
                {props.map((val)=><GroupBar props ={val} setindex =  {setindex}/>)}
                <button className='floatingbutton' onClick={popup}>+</button>
            </div>
        </div>
    )
})

export default Sidebar;