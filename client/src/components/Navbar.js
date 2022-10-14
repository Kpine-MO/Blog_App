import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/Navbar.css";

function Nav({ user, setUser }) {
	function handleLogoutClick() {
		fetch("/logout", { method: "DELETE" }).then((r) => {
			if (r.ok) {
				setUser(null);
			}
		});
	}
	return (
		<div className="nav">
			<div className="inner_nav">
				<ul>
					<NavLink className="li" style={{ textDecoration: "none" }} to="/">
						Home
					</NavLink>
					<NavLink
						className="li"
						style={{ textDecoration: "none" }}
						to="/account"
					>
						Account
					</NavLink>
					<NavLink className="li" style={{ textDecoration: "none" }} to="/">
						About
					</NavLink>
				</ul>
				<div className="btn">
					<NavLink className="grey btn_nav " to="/sign_up">
						Sign Up
					</NavLink>
					<NavLink className="black btn_nav " to="/login">
						Login
					</NavLink>
					<NavLink variant="outline" onClick={handleLogoutClick}>
						Logout
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Nav;
