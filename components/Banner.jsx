import Image from 'next/image'
import styles from '../styles/Banner.module.css'
import augustoImg from '../images/augusto.jpg';
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typewriter from 'typewriter-effect';
import { HeroPattern } from './HeroPattern'; // animação traços no fundo da tela
// import Balance from 'react-wrap-balancer'; // mantem o wrap balanceado

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={ styles.contentBanner }>
                <p className={ styles.hello }>Olá!</p>
                <h2 className={ styles.titleWhite }>Eu sou o Augusto</h2>
                <h2  className={ styles.titleColor }>Barbosa</h2>
                {/* <Balance> */}
                    <Typewriter
                        options={{
                            strings: ['Desenvolvedor Full stack', 'Bacharel em Sistemas de Informação', 'Estudante de UX design'],
                            autoStart: true,
                            loop: true,
                            delay: 80,
                            wrapperClassName: styles.typeWriterText,
                        }}
                    />
                {/* </Balance> */}
                <button className={ styles.btnCurriculum }>
                    {/* <i src={ augustoImg } /> &nbsp; Curriculum */}
                    <FontAwesomeIcon className={ styles.downIcon } icon={ faDownload  } /> &nbsp;
                    Curriculum
                </button>                
            </div>
            <div className={ styles.imageBannerArea }>
                {/* <div className={ styles.animateArea }> */}
                    {/* <div className={ styles.animateCircle } /> */}
                    <Image src={ augustoImg } alt='augusto-foto' className={ styles.augustoFoto }/>   
                {/* </div>                 */}
            </div>
            <HeroPattern />
        </div>
    )
}
