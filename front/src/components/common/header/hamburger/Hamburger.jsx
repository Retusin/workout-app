import React, { useState } from 'react'
import hamburgerImages from '../../../../images/header/hamburger.svg'
import styles from './Hamburger.module.scss'
import { menu } from './menuBase'
import { Link } from 'react-router-dom'
import hamburgerClose from '../../../../images/header/hamburger-close.svg'

const Hamburger = () => {
	const [show, setShow] = useState(false)
	const handleLogout = () => {
		console.log('logout')
	}

	return (
		<div className={styles.wrapper}>
			<button type="button" onClick={() => setShow(!show)}>
				<img src={show ? hamburgerClose : hamburgerImages} alt="Hamberger" />
			</button>
			<nav className={`${styles.menu} ${show ? styles.show : ''}`}>
				<ul>
					{menu.map((item, idx) => (
						<li key={`_menu_${idx}`}>
							<Link to={item.link}>{item.title}</Link>
						</li>
					))}
					<li onClick={handleLogout}>Logout</li>
				</ul>
			</nav>
		</div>
	)
}

export default Hamburger
