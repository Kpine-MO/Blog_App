import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Css/Home.css";
import SingleBlog from "./SingleBlog";
import LatestBlogs from "./LatestBlogs";
import Categories from "./Categories";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";
function Home() {
	const [pBlogs, setPBlogs] = useState([]);

	function handleDeletePost(deletedPost) {
		const updatedPosts = pBlogs.filter((blog) => blog.id !== deletedPost.id);
		setPBlogs(updatedPosts);
	}

	useEffect(() => {
		fetch("/posts")
			.then((res) => res.json())
			.then((data) => setPBlogs(data));
	}, []);

	console.log(pBlogs);
	return (
		<div className="Home_container">
			<div className="Hero">
				<div className="Hero_content">
					<h6>Fishion</h6>
					<h1>Love Is Space and Time Measured by the Heart</h1>
					<p>
						Net to launch on the manufacturer’s new A330neo aircraft in 2017,
						it’s offering lots of extra space, including wider seats as
						standard, no control boxes under seats for the in-flight
						entertainment system, which means it’s all open for you to stretch
						your legs.
					</p>
				</div>
			</div>

			<div className="public_blogs">
				<div className="left">
					<div className="over_head">
						<h1>
							Top Stories/<b>sign up,,,sign in,,,explore</b>
						</h1>
						<div className="access">
							<NavLink className="access_btn grey_btn " to="/post_blog">
								Create Blog
							</NavLink>
						</div>
					</div>
					<div className="posts">
						{pBlogs.map((blog) => {
							return (
								<SingleBlog
									key={blog.id}
									blog={blog}
									onDeletePost={handleDeletePost}
								/>
							);
						})}
					</div>
				</div>

				<div className="sideContent">
					<div className="right">
						<div>
							<p className="latest_p">Latest Blogs</p>
							<LatestBlogs />
						</div>

						<div className="category">
							<p className="category_p">Categories</p>
							{pBlogs.map((blog) => {
								return <Categories key={blog.id} blog={blog} />;
							})}
						</div>

						<div>
							<p className="media_p">Find Us AT</p>
							<SocialMedia />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Home;
