import React from 'react'
import Button from '../../components/ui/button/Button'
import Counters from '../../components/ui/counters/Counters'
import Layout from '../../pages/layout/Layout'
import bgImage from '../../images/home-bg.jpg'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<Layout height="100%" bgImage={bgImage}>
			<Button text={'New'} style="main" callback={() => {}} />
			<h1 className={styles.heading}>Exercises for the shoulders</h1>
			<Counters />
		</Layout>
	)
}

export default Home
