import "./Header.css";
import React, { useEffect, useState } from "react";

export const Header = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div class="header-container">
      <p className="clock">{time}</p>
      <p className="title">To Do List</p>
    </div>
  )
}