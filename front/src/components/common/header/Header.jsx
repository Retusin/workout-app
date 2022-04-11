import React from 'react'
import styles from './Header.module.scss'
import userImages from '../../../images/header/user.svg'
import hamburgerImages from '../../../images/header/hamburger.svg'

const Header = () => {
	return (
		<header className={styles.header}>
			<button type="button">
				<img src={userImages} alt="Auth" />
			</button>
			<button type="button">
				<img src={hamburgerImages} alt="Hamberger" />
			</button>
		</header>
	)
}

export default Header
