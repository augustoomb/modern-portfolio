import styles from '../styles/Main.module.css'
import Banner from './Banner'
import Projects from './Projects'
import Skills from './Skills'

export default function Main() {
    return (
        <main className={styles.main}>
            <Banner />
            <Skills />
            <Projects />
        </main>
    )
}