import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Signup.css";

function Signup() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [about, setAbout] = useState("");
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/blogers", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
				passwordConfirmation,
				about,
			}),
		}).then((r) => {
			if (r.ok) {
				navigate("/account");
			} else {
				r.json().then((err) => setErrors(err.errors));
			}
		});
	}

	// console.log(username)

	return (
		<div className="sign_up ">
			<form onSubmit={handleSubmit} className="form">
				<input
					type="text"
					id="username"
					autoComplete="off"
					value={username}
					placeholder="username"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<br />
				<input
					type="password"
					id="password"
					value={password}
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
					autoComplete="current-password"
				/>
				<br />
				<input
					type="password"
					id="password_confirmation"
					value={passwordConfirmation}
					placeholder="confirm password"
					onChange={(e) => setPasswordConfirmation(e.target.value)}
					autoComplete="current-password"
				/>

				<br />
				<textarea
					rows="3"
					id="bio"
					value={about}
					placeholder="about you"
					onChange={(e) => setAbout(e.target.value)}
				/>

				<br />

				<button type="submit">Sign Up</button>
				<div>
					{errors.map((err) => {
						return <div key={err}>{err}</div>;
					})}
				</div>
			</form>
		</div>
	);
}

export default Signup;
