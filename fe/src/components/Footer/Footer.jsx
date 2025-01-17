import React from 'react'
import logo from "../../assets/images/logo.png";
import nofhotos from "../../assets/images/no_fhotos.png";

export default function Footer() {
  return (
    <footer className="footer-outer">
        <div className="footer-sub-container">
        <img className="footer-logo-img" src={logo} />
        <img className="footer-img" src={nofhotos} />
        <a className="footer-link" href="/donate/terms.html">Terms of Service</a>
        </div>
    </footer>
  )
}
