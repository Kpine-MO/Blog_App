import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi"
import "../Css/Navbar.css";

function Nav({ user, setUser }) {
	const navigate = useNavigate();

	function handleLogoutClick() {
		fetch("/logout", { method: "DELETE" }).then((r) => {
			if (r.ok) {
				setUser(null);
			}

			if (r.ok){
				navigate("/")
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
						className="li li_transparatent"
						style={{ textDecoration: "none" }}
						to="/account"
					>
				
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
					<NavLink className="outline" onClick={handleLogoutClick}>
						<FiLogOut size="1.2em"/>
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Nav;
