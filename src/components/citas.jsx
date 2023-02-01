import styles from '../assets/css/citas.module.css';

import svg from '../assets/images/citas.svg';

import { Fade } from 'react-reveal';

import { FaPhoneAlt } from 'react-icons/fa';

export function Citas() {
    return (
        <section className={`${styles.citas}`}>
            <div className={`${styles.descripcion} contenedor`}>
                <Fade bottom>
                    <div>
                        <h2 className={`${styles.titulo}`}>Citas</h2>
                        <p className='parrafo'>Llamanos para aclarar todas tus dudas y pregunta por nuestras promociones exclusivas.</p>
                        <p className='parrafo'>Agenda una cita y reserva tu vestido favorito.</p>
                        <a name='telefono de vendetta' className={styles.llamarBtn} href='tel:6693251837'><FaPhoneAlt /> Llamar</a>
                    </div>
                    <img src={svg} className={styles.img} loading='lazy' alt="compras"/>
                </Fade>
            </div>
        </section>
    );
}