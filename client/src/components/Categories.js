import React from 'react'


function Categories({blog}) {

    const categoryStyles = {
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${blog.image_url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "250px",
        height: "100px",
        marginTop: "10px",
        cursor: "pointer",
        marginLeft: "75px",
    }

  return (
    <div className='category' style={categoryStyles}>
        <p>{blog.category}</p>
    </div>
  )
}

export default Categories