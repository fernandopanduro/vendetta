import styles from '../assets/css/card.module.css';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom';

export function Card({img, imgAvif, imgWebp, descripcion, id}) {
    return (
        <div className={styles.card}>
            <Link to={`/producto/${id}`}>
                <picture className={styles.picture}>
                    <Fade bottom>
                        <source srcSet={imgAvif} type='image/avif' />
                        <source srcSet={imgWebp} type='image/webp' />
                        <img className={styles.img} src={img} alt={descripcion} loading='lazy' />
                    </Fade>
                </picture>
                <Fade bottom>
                    <div className={styles.descripcion}>
                        <h3 className={`${styles.titulo} parrafo`}>{descripcion}</h3>
                        <AiOutlineArrowRight size={22} />
                    </div>
                </Fade>
            </Link>
        </div>
    )
}