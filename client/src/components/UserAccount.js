import React from 'react'
import '../Css/UserAccount.css'
import Profile from './Profile'
import { FaCameraRetro } from 'react-icons/fa'
import { BsPlusLg } from 'react-icons/bs'

function UserAccount() {
  const cameraStyles = {
    borderRadius: "50%",
    backgroundColor: "black",
    width: "25px",
    height: "25px",
    padding: "5px",
    color: "white",
    float: "right",
    marginRight: "20px"
  }

  const plusStyles = {
    position: "absolute",
    right: "200px"
  }
  return (
    <div>
        <div className='Account_hero'>
          <FaCameraRetro style={cameraStyles} size="2em"/>
          <button className='Post_btn'><BsPlusLg size="0.9em" style={plusStyles}/>Add Blog</button>
        </div>

        <Profile/>
    </div>
  )
}

export default UserAccount