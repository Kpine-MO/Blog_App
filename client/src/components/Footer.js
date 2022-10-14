import React from "react";
import {
	FaFacebookF,
	FaTwitter,
	FaGooglePlusG,
	FaLinkedinIn,
	FaPinterestP,
	FaReact,
	FaRegCopyright,
} from "react-icons/fa";
import '../Css/Footer.css'

function Footer() {
  const iconStyles = {
    marginRight: "20px",
    paddingTop: "30px",
    cursor: "pointer"
  }
	return (
		<div className="footer">
			<div className="footer_top">
				<ul>
					<li>Home</li>
					<li>Categories</li>
					<li>About</li>
					<li>Contact us</li>
				</ul>
				<div>
					<FaFacebookF style={iconStyles} size = "1em"/>
					<FaTwitter style={iconStyles} size = "1em"/>
					<FaGooglePlusG style={iconStyles} size = "1em"/>
					<FaLinkedinIn style={iconStyles} size = "1em"/>
					<FaPinterestP style={iconStyles} size = "1em"/>
				</div>
			</div>

			<h4 className="footer_bottom">
				PCNN <FaRegCopyright />. Made with <FaReact /> by PCNN
			</h4>
		</div>
	);
}

export default Footer;