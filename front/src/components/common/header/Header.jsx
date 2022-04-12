import React from 'react'
import styles from './Header.module.scss'
import userImages from '../../../images/header/user.svg'
import Hamburger from './hamburger/Hamburger'

const Header = () => {
	return (
		<header className={styles.header}>
			<button type="button">
				<img src={userImages} alt="Auth" />
			</button>
			<Hamburger />
		</header>
	)
}

export default Header
