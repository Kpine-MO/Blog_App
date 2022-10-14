import React, { useEffect, useState } from "react";
import "../Css/Profile.css";

function Profile() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5004/User")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);
	return (
		<div>
			{users.map((user) => {
				return (
					<div className="user">
						<img src={user.imgUrl} className="img" alt="Profilepic" />
              <div className="info">
              <h3>{user.username}</h3>
            <h3>{user.blogs}</h3>
            <h3>{user.categories}</h3>
              </div>
					</div>
				);
			})}
		</div>
	);
}

export default Profile;
