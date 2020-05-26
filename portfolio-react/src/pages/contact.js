import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Contact = () => (
	<div>
		<h1>Stay in touch</h1>

		<p>Like the posts you see here? Sign up to get notified about new content.</p>
		<form class="simple-form" method="POST" data-netlify="true" name="email">
			<input class="input-text" style={{ width: "50%" }} id="subscriberEmail" type="email" name="email" placeholder="Enter you email address here..." />
			<button class="button blue-button" type="submit" style={{ margin: "0 0.5rem" }} >Submit</button>
		</form>

		<p>You can find me at these places:</p>

		<section class="contact-info">
			<ul>
				<li><strong>Email</strong>: <a href="mailto:{{ site.data.info.email }}">nishalkulkarni@gmail.com</a></li>
				<li><strong>Twitter</strong>: <a href="{{site.data.info.twitter-url}}">nishalkulkarni</a></li>
				<li><strong>LinkedIn</strong>: <a href="https://www.linkedin.com/in/nishalkulkarni/">nishalkulkarni</a></li>
				<li><strong>Reddit</strong>: <a href="https://www.reddit.com/user/infinitynishal">InfinityNishal</a></li>
			</ul>
		</section>
	</div>
)

const ContactPage = () => (
	<Layout>
		<Contact />
	</Layout>
)

export default ContactPage
