import React from 'react'
import "./styles/Footer.css"

export default function Footer() {
  return (
    <>
    <footer>
            <div className="footer-left">
                <p>© 2023 osmangund</p>
            </div>
            <div className="footer-right">
                <a target="_blank" rel="noopener noreferrer" className="link linkedin" href="https://www.linkedin.com/in/osman-emre-gundogdu-066282257/">LinkedIn</a>
                <a target="_blank" rel="noopener noreferrer" className="link github" href="https://github.com/emreguendogdu">GitHub</a>
            </div>
    </footer>
    </>
  )
}
