import React from 'react'
import styles from './Button.module.scss'

const Button = ({ text, callback, style = 'green' }) => {
	return (
		<div className={styles.wrapper}>
			<button onClick={callback} className={styles.button}>
				{text}
			</button>
		</div>
	)
}

export default Button
