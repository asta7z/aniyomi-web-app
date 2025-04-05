import React, { useEffect, useState } from 'react'
import './Header.css'
import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'
import Socials from './Socials/Socials'

const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0;
			setScrolled(isScrolled);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

  	return (
    	<header className={scrolled ? 'header-scrolled' :  ''}>
			<div className='logo-search'>
				<Logo />
				{/* <Search /> */}
			</div>
			<div className="nav-socials">
				<Navbar />
				<div className="sep"></div>
				<Socials />
			</div>
		</header>
  	)
}

export default Header