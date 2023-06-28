import styles from '../styles/Projects.module.css';
import arrProjects from '../data/dataProjects';
import Project from './Project';

export default function Projects() {
    return (
        <div className={ styles.projectsArea }>
            <h2 className={ styles.titleProjects }>Projetos</h2>
            <div className={ styles.projectsData }>
                {
                    arrProjects.map((proj, index) => (<Project
                        key={ index }
                        cover={ proj.cover }
                        title={ proj.title }
                        text={ proj.text }                     
                        tech={ proj.technologies }                     
                    />))
                }
            </div>
        </div>
    )
}
