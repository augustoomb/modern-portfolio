// import Image from 'next/image'
import Image from 'next/image'
import styles from '../styles/Banner.module.css'
import augustoImg from '../images/augusto.jpg';
import Typewriter from 'typewriter-effect';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={ styles.contentBanner }>
                <p className={ styles.hello }>Olá!</p>
                <h2 className={ styles.titleWhite }>Eu sou o Augusto</h2>
                <h2  className={ styles.titleColor }>Barbosa</h2>
                {/* <span>TEXTO MUDANDO</span> */}
                <Typewriter
                    options={{
                        strings: ['Desenvolvedor Full stack', 'Bacharel em Sistemas de Informação'],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                      }}
                />
                <button>Curriculum </button>
            </div>
            <div className={ styles.imageBannerArea }>
                <Image src={ augustoImg } alt='augusto-foto' className={ styles.augustoFoto }/>
            </div>
        </div>
    )
}
