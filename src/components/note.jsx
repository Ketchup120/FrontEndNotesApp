const Note = React.memo(({props,date})=>{
    let dt = date
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