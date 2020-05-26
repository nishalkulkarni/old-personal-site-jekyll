import React from "react"

import Navbar from "./navigation"

const Layout = ({ children }) => {
  return (
    <>
      <a href="#maincontent" class="skip-link">Skip to main content</a>
      <header style={{
        background: "white",
        maxWidth: "800px",
        margin: "0rem auto",
        borderLeft: "2px solid #f0f0f0",
        borderRight: "2px solid #f0f0f0"
      }}>
        <Navbar />
      </header>
      <main id="maincontent" style={{
        background: "white",
        maxWidth: "800px",
        margin: "0rem auto",
        borderLeft: "2px solid #f0f0f0",
        borderRight: "2px solid #f0f0f0"
      }}>
        <div className="content sub-section">
          {children}
        </div>
      </main>
      <footer style={{
        background: "white",
        maxWidth: "800px",
        margin: "0rem auto",
        borderLeft: "2px solid #f0f0f0",
        borderRight: "2px solid #f0f0f0"
      }}>
        <section style={{
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          background: "white",
          margin: "0rem 2rem"
        }}>
          <small>Made by <strong>Nishal Kulkarni</strong> /
					<a href="https://github.com/nishalkulkarni/nishalkulkarni.com" target="_blank">View source</a>
          </small>
        </section>
      </footer>
    </>
  )
}

export default Layout
