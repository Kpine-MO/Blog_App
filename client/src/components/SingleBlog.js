import React from "react";
import "../Css/SingleBlog.css";
import { MdOutlineWatchLater } from "react-icons/md"
import Update from "./Update";

function SingleBlog({ blog, onDeletePost, pBlogs, setPBlogs, content }) {


	function deletePost() {
		fetch("/posts", {
			method: "DELETE",
		})
			.then((res) => res.json())
		.then(() => {
			onDeletePost(blog)
		});
	}

	const timeStyles = {
		color: "rgb(216, 161, 21)",
		position: 'absolute',
		marginBottom: "100px"
	}
	return (
		<>
			<div className="singleBlog">
				<div className="left">
					<img src={blog.image_url} className="image" alt="Blogpic" />
				</div>
				<div className="right">
					<h5>{blog.category}</h5>
					<h1>{blog.title}</h1>
					<p className="blogMeteData">
						By {blog.author} <MdOutlineWatchLater style={timeStyles}/> <e className="date">{blog.created_at.replace(/\.\d+/, "")}</e>
					</p>
					<p className="blogBody">{blog.content}</p>
					<Update
					pBlogs={pBlogs}
					setPBlogs={setPBlogs}
					content={content}
					/>
                    <button className="single_black">Edit</button>
					<button className="single_grey" onClick={deletePost}>Delete</button>
				</div>
			</div>
		</>
	);
}

export default SingleBlog;
