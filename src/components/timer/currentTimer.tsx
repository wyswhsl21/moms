import React, { useEffect, useState } from 'react'

const CurrentTimer = () => {
    
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const id = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return (() => clearInterval(id))
    }, []);
  
   console.log(time.toLocaleTimeString())
  return (
    <span>{time.toLocaleTimeString()}</span>
  )
}

export default CurrentTimer
