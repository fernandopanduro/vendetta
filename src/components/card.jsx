import styles from '../assets/css/card.module.css';

import img from '../assets/images/Vestido_instylebyak.jpg'
import imgAvif from '../assets/images/Vestido_instylebyak.avif'
import imgWebp from '../assets/images/Vestido_instylebyak.webp'

import { AiOutlineArrowRight } from 'react-icons/ai';

import { Fade } from 'react-reveal'

export function Card() {
    return (
        <div className={styles.card}>
            <picture className={styles.picture}>
                <Fade bottom>
                    <source srcSet={imgAvif} type='image/avif' />
                    <source srcSet={imgWebp} type='image/webp' />
                    <img className={styles.img} src={img} alt="" loading='lazy' />
                </Fade>
            </picture>
            <Fade bottom>
                <div className={styles.descripcion}>
                    <h3 className={`${styles.titulo} parrafo`}>Vestido Instylebyak</h3>
                    <AiOutlineArrowRight size={22} />
                </div>
            </Fade>
        </div>
    )
}