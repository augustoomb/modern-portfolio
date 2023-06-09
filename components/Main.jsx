import styles from '../styles/Main.module.css'
import Banner from './Banner'

export default function Main() {
    return (
        <main className={styles.main}>
            <Banner />
            <div className="styles.skills">
                <h2>Skills</h2>
            </div>
            <div className="styles.projects">
                <h2>Projects</h2>
            </div>
        </main>
    )
}