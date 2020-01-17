import React from 'react'
import './Months.scss'

const Months = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  return (
    <div className="Months">
      {months.map(m => (
        <span key={m} className="month">{m}</span>
      ))}
    </div>
  )
}

export default Months
