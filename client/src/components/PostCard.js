import React from 'react'

function PostCard({username,about}) {
  return (
    <div>
        <p>{username}</p>
        <p>{about}</p>
        {/* <p>{posts}</p> */}
    </div>
  )
}

export default PostCard