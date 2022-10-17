import React from 'react'
import '../Css/UserAccount.css'
import { FaCameraRetro } from 'react-icons/fa'
import { BsPlusLg } from 'react-icons/bs'
import { json } from 'react-router-dom'

function UserAccount({user, userPosts}) {

  const { username, about } = user

  const user_posts = userPosts.map((item) => {
    return <div key={item.id}>
      <h3>{item.title}</h3>
      <img src={item.image_url}/>
    </div>
  })
  
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
          {about}
          <br/>
          <div>
          {username}        
          </div>
          <div style={{color: "red"}}>
        {user_posts}
          </div>
    </div>
  )
}

export default UserAccount