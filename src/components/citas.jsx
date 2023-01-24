import styles from '../assets/css/citas.module.css';

import { Fade } from 'react-reveal';

export function Citas() {
    return (
        <section className={`${styles.contenedor}`}>
            <div className={`${styles.descripcion} contenedor`}>
                <Fade bottom>
                    <h2 className={`${styles.titulo} titulo`}>Citas</h2>
                    <p className='parrafo'>Llamanos para aclarar todas tus dudas y pregunta por nuestras promociones exclusivas.</p>
                    <p className='parrafo'>Agenda una cita y reserva tu vestido favorito.</p>
                    <a className={styles.llamarBtn} tel="3122702315">Llamar</a>
                </Fade>
            </div>
        </section>
    );
}