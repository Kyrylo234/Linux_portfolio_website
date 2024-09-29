import { useEffect, useState } from 'react'
function Clock() {
    const [time, setTime] = useState();

    useEffect(() => {

        setInterval(() => {

        const dateObject = new Date()
        const hour = dateObject.getHours()
        const minute = dateObject.getMinutes()
        let currentTime = hour + ':' + minute;

        let map = new Map([[0,"Jan"], [1, "Feb"], [2, "Mar"], [3, "Apr"], [4, "May"], [5, "Jun"], [6, "Jul"], [7, "Aug"], [8, "Sep"], [9, "Oct"], [10, "Nov"], [11, "Dec"]]);

        currentTime = map.get(dateObject.getMonth())+" " + dateObject.getDate()+ " " + currentTime;
        setTime(currentTime)
        }, 1000)

    }, [])
    return (
      <>
        <div className="Clock">
            <h5>{time}</h5>
        </div>
      </>
    )
  }
  
  export default Clock