import styles from '../assets/css/citas.module.css';

import svg from '../assets/images/citas.svg';

import { Fade } from 'react-reveal';

import { FaPhoneAlt } from 'react-icons/fa';

export function Citas() {
    return (
        <section className={`${styles.citas}`}>
            <div className={`${styles.descripcion} contenedor`}>
                <Fade bottom>
                    <h2 className={`${styles.titulo}`}>Citas</h2>
                    <p className='parrafo'>Llamanos para aclarar todas tus dudas y pregunta por nuestras promociones exclusivas.</p>
                    <p className='parrafo'>Agenda una cita y reserva tu vestido favorito.</p>
                    <a className={styles.llamarBtn} tel="3122702315"><FaPhoneAlt /> Llamar</a>
                    <img src={svg} alt="compras" />
                </Fade>
            </div>
        </section>
    );
}