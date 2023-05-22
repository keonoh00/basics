import React, { useEffect, useState } from "react";

export const Header = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return <div class="header-container"><h1>To Do List</h1><h1>{time}</h1></div>
}