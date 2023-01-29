import styles from '../assets/css/productoDetalles.module.css';

import img from '../assets/images/Vestido_instylebyak.jpg';
import imgAvif from '../assets/images/Vestido_instylebyak.avif';
import imgWebp from '../assets/images/Vestido_instylebyak.webp';

import img2 from '../assets/images/Vestido_instylebyak2.jpg';
import imgAvif2 from '../assets/images/Vestido_instylebyak2.avif';
import imgWebp2 from '../assets/images/Vestido_instylebyak2.webp';

import { FaPhoneAlt } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

import { Ruta } from "../components/ruta";
import { Fade } from 'react-reveal';

export function ProductoDetalles() {
    return (
        <section className={`${styles.productoDetalles} contenedor`}>
            <Ruta ruta='Vestido' />

            <div>
                <div>
                    <picture className={styles.picture}>
                        <Fade bottom>
                            <source srcSet={imgAvif} type='image/avif' />
                            <source srcSet={imgWebp} type='image/webp' />
                            <img className={styles.img} src={img} alt="" loading='lazy' />
                        </Fade>
                    </picture>
                </div>
                <div>
                    <picture className={styles.picture}>
                        <Fade left>
                            <source srcSet={imgAvif} type='image/avif' />
                            <source srcSet={imgWebp} type='image/webp' />
                            <img className={styles.imgSecundaria} src={img} alt="" loading='lazy' />
                        </Fade>
                    </picture>                    
                    <picture className={styles.picture}>
                        <Fade left>
                            <source srcSet={imgAvif2} type='image/avif' />
                            <source srcSet={imgWebp2} type='image/webp' />
                            <img className={styles.imgSecundaria} src={img2} alt="" loading='lazy' />
                        </Fade>
                    </picture>                    
                    {/* <picture className={styles.picture}>
                        <Fade bottom>
                            <source srcSet={imgAvif3} type='image/avif' />
                            <source srcSet={imgWebp3} type='image/webp' />
                            <img className={styles.imgSecundaria} src={img3} alt="" loading='lazy' />
                        </Fade>
                    </picture> */}
                </div>
                <div className={styles.detalles}>
                    <Fade top>
                        <h2 className={styles.titulo}>Img 300</h2>
                        <a name='telefono de vendetta' className={styles.llamarBtn} tel="6693251837"><FaPhoneAlt /> Llamar</a>
                        <a name='instagram de vendetta' className={`${styles.llamarBtn} ${styles.igBtn}`} href="https://www.instagram.com/vendetta_vestidos/"><BsInstagram size={27} /> Instagram</a>
                    </Fade>
                </div>
            </div>

        </section>
        )
}