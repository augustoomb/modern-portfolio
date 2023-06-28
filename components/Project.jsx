import styles from '../styles/Project.module.css';
import Image from 'next/image'

export default function Project({ cover, title, text, tech }) {
    return (
        <div className={ styles.projectArea }>
            <div className={ styles.imgArea }>
                <Image src={ cover } alt={ title } className={ styles.imgCover }/>   
            </div>
            <div className={ styles.infoArea }>
                <h3 className={ styles.titleProject }>{ title }</h3>
                <p>{ text }</p>
                <div className={ styles.technologies }>
                    <h4>Competências</h4>
                    {
                        tech ? (
                            tech.map((item, index) => (      
                                <Image key={ index } src={ item.img } alt={ item.text } className={ styles.imgIcon } />
                            ))
                        ) : (
                            null
                        )                        
                    }
                </div>
            </div>
        </div>
    )
}
