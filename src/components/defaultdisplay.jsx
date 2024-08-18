import disp from '../assets/display.png'
import lock from '../assets/lock.png'
import { memo } from 'react'
const DefaultDisplay = memo(({props})=>{
    return props == 0? (
        <div className='defaultdisplay'>
            <img src={disp} alt="Pocket Notes" className="notespic" />
            <div>
                <h1>Pocket Notes</h1>
            </div> 
            <div className='para'>
                <p>Send and receive messages without keeping your phone online<br />Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            </div>
            <div className='encrypt'>
                <img src={lock} alt="enc" className="lock" />
                <p>end-to-end encrypted</p>
            </div>
        </div>
    ) : ""
})

export default DefaultDisplay;