import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Post.css";

function PostArticle() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [author, setAuthor] = useState("");
	const [category, setCategory] = useState("");
	const [imageUrl, setImageUrl] = useState("")

	async function handleSubmit(event) {
		event.preventDefault();

		const newPost = {
			title: title,
			content: content,
			author: author,
			category: category,
			image_url: imageUrl
		};
		
		try{
			let result = await fetch("/posts", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newPost),
				
			});
			result = await result.json();
		}catch(error){
			console.log(error)
		}

		setContent("");
		setAuthor("");
		setTitle("");
		setImageUrl("");
	}

	return (
		<div className="post">
			<form className="NewPost" onSubmit={handleSubmit}>
				<input
					className="post_input"
					type="text"
					value={title}
					name="title"
					placeholder="title"
					onChange={(e) => setTitle(e.target.value)}
				/>

				<input
					className="post_input"
					type="text"
					value={imageUrl}
					name="imageUrl"
					placeholder="image"
					onChange={(e) => setImageUrl(e.target.value)}
				/>
				<br />

				<textarea
					className="post_input"
					rows="4"
					value={content}
					name="content"
					placeholder="content"
					onChange={(e) => setContent(e.target.value)}
				/>

				<br />

				<input
					className="post_input"
					type="text"
					value={author}
					name="author"
					placeholder="author's name"
					onChange={(e) => setAuthor(e.target.value)}
				/>

				<br />

				<br />

				{/* <input
				// 	className="post_input small"
				// 	type="date"
				// 	value={date}
				// 	onChange={(e) => setDate(e.target.value)}
				// /> */}

				<br />

				<select
					className="post_input small"
					name="category"
					onChange={(e) => setCategory(e.target.value)}
				>
					<option value="category">category</option>
					<option value="Food">Food</option>
					<option value="Politics">Politics</option>
					<option value="Technology">Technology</option>
					<option value="Lifestyle">Lifestyle</option>
				</select>

				<br />
				<button className="btn_post black" type="submit">
					Post
				</button>
				<Link to="/">
					<button className="btn_post grey" type="submit">
						Back
					</button>
				</Link>
			</form>
		</div>
	);
}

export default PostArticle;
