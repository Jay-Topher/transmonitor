import React from 'react'
import './HelloProfile.scss'

const HelloProfile = () => {
  const profilePhoto = 'assets/oluwaleke.svg'
  return (
    <div className="profile">
      <div className="profile_text">
        <div className="hello">Hello</div>
        <div className="name">Oluwaleke Ojo</div>
      </div>
      <div className="profile_photo">
        <img src={profilePhoto} alt="profile"/>
      </div>
    </div>
  )
}

export default HelloProfile
