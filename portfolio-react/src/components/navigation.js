import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
	<nav style={{
		background: "white",
		margin: "0rem 2rem",
		height: "90px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between"
	}}>
	<div className="nav-brand">
		<Link to="/" style={{
			fontWeight: "600",
			color: "#333"
		}}>
			<span>Nishal Kulkarni</span>
		</Link>
	</div>
	<ul className="nav-links" style={{
		listStyleType: "none",
		overflow: "hidden"
	}}>
		<li><Link href="/blog">Blog</Link></li>
		<li><Link href="/contact">Contact</Link></li>
		<li><a href="{{site.data.info.github-url}}" target="_blank">GitHub</a></li>
	</ul>
	</nav >
)

export default Navbar
