import React, { useEffect, useState } from "react";
import "../Css/LatestBlogs.css";

function LatesBlogs() {
	const [lBlogs, setLBlogs] = useState([]);

	useEffect(() => {
		fetch("/posts/new")
			.then((res) => res.json())
			.then((data) => setLBlogs(data));
	}, []);

	console.log(lBlogs)
	return (
		<>
			{lBlogs.map((blog) => {
				return <div key={blog.id} className="sideInfo">
					<div className="left">
						<img
							src={blog.image_url}
							className="latestBlogsImg"
							alt="Blogpic"
						/>
					</div>
					<div className="right">
						<h1 className="sideInfo_h1">{blog.title}</h1>
						<p className="sideInfo_p">
							by {blog.author} {blog.created_at}
						</p>
					</div>
				</div>;
			})}
		</>
	);
}

export default LatesBlogs;
