import styles from '../assets/css/rentar.module.css'

import img from '../assets/images/Vendetta.jpg';
import imgWebp from '../assets/images/Vendetta.webp';
import imgAvif from '../assets/images/Vendetta.avif';

import img2 from '../assets/images/Vendetta2.jpg';
import imgWebp2 from '../assets/images/Vendetta2.webp';
import imgAvif2 from '../assets/images/Vendetta2.avif';

import {Fade} from 'react-reveal'

export function Rentar() {
    return (
        <section id='rentar' className={`${styles.rentar} contenedor`}>
            <h2 className='titulo'>Rentar</h2>
            <div className={styles.contenedorImages}>
                <Fade right>
                    <p className={`${styles.parrafo} parrafo`}>Encuentra vestidos para todo tipo de ocasión y etiqueta.</p>
                </Fade>
                    <picture>
                        <Fade right>
                            <source srcSet={imgAvif} type='image/avif' />
                            <source srcSet={imgWebp} type='image/webp' />
                            <img className={`${styles.img} ${styles.imgRigth}`} src={img} alt="vendetta" loading='lazy' />
                        </Fade>
                    </picture>
            </div>
            <div className={styles.contenedorImages}>
                <Fade left>
                    <p className={`${styles.parrafo} parrafo`}>Si no necesitas ajustes, llevatelo incluso el dia del evento.</p>
                </Fade>
                <picture>
                    <Fade left>
                        <source srcSet={imgAvif2} type='image/avif' />
                        <source srcSet={imgWebp2} type='image/webp' />
                        <img className={`${styles.img} ${styles.imgLeft}`} src={img2} alt="vendetta2" loading='lazy' />
                    </Fade>
                </picture>
            </div>
        </section>
    )
}