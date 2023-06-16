import Image from "next/image";
import styles from '../styles/Skill.module.css'

export default function Skill({ logo, name }) {
    return (
        <div className={ styles.skillArea }>
            <Image alt={ name } src={ logo }  className={ styles.img } />
            <span>{ name }</span>
        </div>
    )
}
