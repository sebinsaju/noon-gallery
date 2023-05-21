import React, { useState } from 'react'
import Link from 'next/link'
const Header = () => {
	const [toggle, setToggle] = useState(false);
	const toggler = () => {
		setToggle(!toggle)
	}


	const MENUS= [
		{link:"/" ,title:"Home"},
		{link:"/about" ,title:"About"},
		{link:"/services" ,title:"Services"},
		// {link:"/register" ,title:"Register Now"},
		{link:"/contact" ,title:"Contact"},
	]
	return (
		<header className="w3l-header-nav">
			<nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
				<div className="container">
					<Link href="/"><a className="navbar-brand">
						<img src="/assets/logo.png" alt="Your logo" style={{ height: "75px" }} /><span>Noon Gallery</span></a></Link>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggler}>
						<span className="navbar-toggler-icon"></span>
					</button>
					{toggle && <div className='mobile-menu'>
						<ul className="navbar-nav ml-auto">
							{
								MENUS.map((menu,index)=>{
									return<li className="nav-item" key={index}>
								<Link href={menu.link}><a className="nav-link" onClick={toggler}>{menu.title}</a></Link>
							</li>
								})
							}
						</ul>
					</div>}
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							{MENUS.map((menu,index)=>{
								return<li className="nav-item" key={index}>
								<Link href={menu.link}><a className="nav-link">{menu.title}</a></Link>
							</li>
							})}
						</ul>
						{/* <a href="#booking" className="ml-3 book btn btn-secondary btn-style">Book Now</a> */}
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header