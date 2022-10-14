import React, { useState } from 'react'

function Update({ pBlogs, setPBlogs, content}) {

  const[newBlog, setNewBlog] = useState(content)
  const[show, setShow] = useState(false)

  function handleUpdatedBlogs(updatedBlog) {
    let update = pBlogs.map((blog) => blog.id === updatedBlog.id ? updatedBlog : blog)
    setPBlogs(update)
  }

  function handleShow() {
    setShow((show) => !show)
  }

  function handleChange(e) {
    setNewBlog(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch("/posts", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: newBlog,
      }),
    })
      .then((r) => r.json())
      .then((data) => handleUpdatedBlogs(data));
  
      setShow((show) => !show)
  }
  

  return (
    <div>
      <div>
         {show ?
          <form onSubmit={handleSubmit}>
          <textarea rows='10' onChange={handleChange} name='content' value={newBlog}/>
          <input type='submit' value='save'/>
      </form> : null
         }
      </div>
      <button className="btn_left" onClick={handleShow}>EDIT</button>
    </div>
  )
}

export default Update