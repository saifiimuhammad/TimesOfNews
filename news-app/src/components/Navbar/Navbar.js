import React, { Component } from 'react';
import "./style.css";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                {/* cb5bc6f3a7dc4bf8915254960bdcc794 */}
                {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">News Donkey</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-search" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav> */}
                <nav className="navbar navbar-expand-lg nav">
                    <div className="container-fluid">
                        <a href="/" className="navbar-title">NewsDonkey</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link nav-links active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-links" href="/about">About</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className='search-bar' type="search" placeholder='Search here' aria-label='Search'/>
                                <button className='btn-submit' type='submit'><i class="ri-search-line"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
