import React from "react"
import { Link } from "react-router-dom";

export default function Header () {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                    <img className="navbar-brand" src="assets/images/Logo.png" alt="" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item" >
                            <Link className="nav-link" to="/">Whitepaper</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/road">Roadmap</Link>
                        </li>
                        <li className="nav-item text-white active-items">
                            <Link className="nav-link" to="/lounge">NFT Lounge</Link>
                        </li>
                        <li className="nav-item text-white">
                            <Link className="nav-link" to="">Team</Link>
                        </li>
                        <li className="nav-item text-white">
                            <Link className="nav-link" to="">Jobs</Link>
                        </li>
                        <li className="nav-item text-white">
                            <Link className="nav-link" to="">Connect Wallet</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
