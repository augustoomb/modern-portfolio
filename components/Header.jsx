import styles from '../styles/Header.module.css';
import linkedinImg from '../images/linkedin.svg';
import email from '../images/email.svg';
import github from '../images/github.svg';
import logo from '../images/logo.png';
import Image from "next/image";

export default function Header() {
    return (        
        <header className={ styles.header }>
            <Image src={ logo } alt='logo-augusto' />
            <div className={ styles.icons }>
                <Image src={ linkedinImg } alt='linkedin' className={ styles.icon }/>
                <Image src={ github } alt='github' className={ styles.icon }/>
                <Image src={ email } alt='email' className={ styles.icon }/>
            </div>
        </header>
    )
}