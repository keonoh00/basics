import "./Header.css";
import React, { useEffect, useState } from "react";

export const Header = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div class="header-container">
      <p className="clock">{time.toLocaleTimeString()}</p>
      <p className="date">{time.getFullYear()}년 {time.getMonth()}월 {time.getDate()}일</p>
      <p className="title">To Do List</p>
    </div>
  )
}