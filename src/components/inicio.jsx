import styles from '../assets/css/inicio.module.css';

import img from '../assets/images/New_years_eve_shoot.jpg';
import imgAvif from '../assets/images/New_years_eve_shoot.avif';
import imgWebp from '../assets/images/New_years_eve_shoot.webp';

import img2 from '../assets/images/New_years_eve_shoot2.jpg';
import imgAvif2 from '../assets/images/New_years_eve_shoot2.avif';
import imgWebp2 from '../assets/images/New_years_eve_shoot2.webp';

import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

import { AiOutlineArrowRight } from 'react-icons/ai';


export function Inicio() {
    return (
        <div id='inicio' className={`${styles.inicio} contenedor`}>
            <div className={styles.inicioDescripcion}>
                <Fade left>
                    <h1 className={styles.titulo}>VENDETTA</h1>
                    <p className='parrafo'>El look perfecto esta en los detalles</p>
                    <Link to='/catalogo' className={`${styles.link} parrafo`}>Explorar <AiOutlineArrowRight size={25} /> </Link>
                </Fade>
            </div>
            <div className={styles.inicioImagenes}>
                <picture>
                    <Fade bottom>
                        <source srcSet={imgAvif2} type='image/avif' />
                        <source srcSet={imgWebp2} type='image/webp' />
                        <img className={styles.img} src={img2} alt="" loading='lazy' />
                    </Fade>
                </picture>
                <picture>
                    <Fade bottom>
                        <source srcSet={imgAvif} type='image/avif' />
                        <source srcSet={imgWebp} type='image/webp' />
                        <img className={styles.img2} src={img} alt="" loading='lazy' />
                    </Fade>
                </picture>
            </div>
        </div>
    )
}