import styles from '../assets/css/inicio.module.css';

import img from '../assets/images/New_years_eve_shoot.jpg';
import imgAvif from '../assets/images/New_years_eve_shoot.avif';
import imgWebp from '../assets/images/New_years_eve_shoot.webp';

import img2 from '../assets/images/New_years_eve_shoot2.jpg';
import imgAvif2 from '../assets/images/New_years_eve_shoot2.avif';
import imgWebp2 from '../assets/images/New_years_eve_shoot2.webp';

import { Fade } from 'react-reveal';

import { AiOutlineArrowRight } from 'react-icons/ai'


export function Inicio() {
    return (
        <div className={`${styles.inicio} contenedor`}>
            <div className={styles.inicioDescripcion}>
                <Fade left>
                    <h1 className={styles.titulo}>VENDETTA</h1>
                    <p>El look perfecto esta en los detalles</p>
                    <a href="/" className={styles.link}>Explorar <AiOutlineArrowRight size={22} /> </a>
                </Fade>
            </div>
            <div className={styles.inicioImagenes}>
                <picture>
                    <Fade bottom>
                        <source srcSet={imgAvif} type='image/avif' />
                        <source srcSet={imgWebp} type='image/webp' />
                        <img className={styles.img} src={img} alt="" loading='lazy' />
                    </Fade>
                </picture>
                <picture>
                    <Fade bottom>
                        <source srcSet={imgAvif2} type='image/avif' />
                        <source srcSet={imgWebp2} type='image/webp' />
                        <img className={styles.img2} src={img2} alt="" loading='lazy' />
                    </Fade>
                </picture>
            </div>
        </div>
    )
}