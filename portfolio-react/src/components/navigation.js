import React from "react"
import { Link } from "gatsby"

import "../styles/navigation.css"

const Navbar = () => (
	<nav>
		<div className="nav-brand">
			<Link to="/">
				<span>Nishal Kulkarni</span>
			</Link>
		</div>
		<ul className="nav-links" style={{
			listStyleType: "none",
			overflow: "hidden"
		}}>
			<li><Link to="/blog">Blog</Link></li>
			<li><Link to="/contact">Contact</Link></li>
			<li><a href="{{site.data.info.github-url}}" target="_blank">GitHub</a></li>
		</ul>
	</nav >
)

export default Navbar
