import { memo } from "react"
const Note = memo(({props,date})=>{
    let dt
    if (date instanceof Date)
    {
        dt = date
    }
    else
    {
        dt = new Date(Date.parse(date))
    }
    let a = dt.toDateString()
    let b = dt.toLocaleTimeString([], { timeStyle: "short" })
    a = a.slice(4,a.length)

    return(
        <div className="note">
            <p>{props}</p>
            <div>
                <div className="datefooter">
                    <div>{a}</div>
                    <div className="dot"></div>
                    <div>{b}</div>
                </div>
            </div>
        </div>
    )
})

export default Note