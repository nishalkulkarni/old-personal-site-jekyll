import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SelfIntro = () => (
  <section class="self-intro">
    <div class="photo-self">
      <img src="../images/me.jpg" alt="Photo of Nishal Kulkarni"></img>
    </div>
    <div class="info-self">
      <h1 class="title">Hi, I'm Nishal.</h1>
      <p>
        I'm a Computer Science student at the <a href="http://www.vit.ac.in/" class="para-link" target="_blank">Vellore Institute of Technology</a>. When I’m not busy completing assignments, you can find me working on my <a href="projects.html" class="para-link">side projects</a>, reading a book (mostly nonfiction), learning a new language, playing table tennis and video games.
			</p>
      <p>
        Other than the things listed above, I also have a long <a href="bucketlist.html" class="para-link">bucket list</a>. If you like me so far and want to know more, this website is full of <a href="journal.html" class="para-link">articles</a> documenting my ideas, opinions, achievements and valuable lessons I have learned ever since I started this website.
			</p>
    </div>
  </section>
)

const IndexPage = () => (
  <Layout>
    <SelfIntro />
  </Layout>
)

export default IndexPage
