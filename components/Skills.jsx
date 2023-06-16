import arrSkills from "../data/dataSkills"
import Skill from "./Skill"
import styles from '../styles/Skills.module.css'

export default function Skills() {
    return (
        <div className={ styles.skillsArea }>
            <h2 className={ styles.titleSkill }>Competências</h2>
            <div className={ styles.skillsData }>
                {
                    arrSkills.map((skill, index) => (<Skill
                        key={ index }
                        logo={ skill.logo }
                        name={ skill.name }
                    />))
                }
            </div>
        </div>
    )
}
