import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import {Fade} from 'react-reveal'

import styles from '../assets/css/header.module.css';

export function Header() {
    return (
        <Fade top>
            <header className={styles.contanedorHeader}>
                <div className={`${styles.header} contenedor`}>
                    <Link to='/'><h1 className={styles.title}>VENDETTA</h1></Link>
                    <a name='Instagram' href="https://www.instagram.com/vendetta_vestidos/" target="_blank" rel="noopener noreferrer"><BsInstagram size={30} /></a>
                </div>
            </header>
        </Fade>
    );
}