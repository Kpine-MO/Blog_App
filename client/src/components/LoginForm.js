import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Css/LoginForm.css'

function LoginForm({setUser}) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();


	function handleSubmit(e) {
		e.preventDefault();
		fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		}).then((r) => {
			if (r.ok) {
				navigate("/user")
				r.json().then((user) => setUser(user));
			} else {
				r.json().then((err) => setErrors(err.errors));
			}
		});
	}
	return (
		<div className="login">
			<form onSubmit={handleSubmit} className="form">
				<input
					type="text"
					id="username"
					autoComplete="off"
                    placeholder="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
<br/>
				<input
					type="password"
					id="password"
					autoComplete="current-password"
                    placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
<br/>
				<button type="submit">Sign Up</button>
				<div className="error">
					{errors.map((err) => {
						return <div key={err}>{err}</div>;
					})}
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
