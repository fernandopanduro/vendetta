import styles from '../assets/css/visitanos.module.css';

import { FaPhoneAlt } from 'react-icons/fa'; 
import { Fade } from 'react-reveal';

export function Visitanos() {
    return (
        <section id='visitanos' className={`${styles.visitanos} contenedor`}>
            <h2 className="titulo">Visitanos</h2>
            <div className={styles.descripcion}>
                <Fade bottom>
                    <p className="parrafos">Visitanos y entre la gran variedad de estilos, opta por la mejor opcion para ti.</p>
                    <p className="parrafos">Avenida de las torres 5624 Real Del Valle Mazatlán, Sinaloa, México.</p>
                    <p className="parrafos"> <FaPhoneAlt /> 669 325 1837</p>
                </Fade>

                <iframe title='Google maps Vendetta' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.782477862274!2d-106.43173458493582!3d23.28735228481963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8698acbd5375253d%3A0x6a9a3e61fa656fb5!2sAv%20Las%20Torres%205624%2C%20Real%20del%20Valle%2C%2082124%20Mazatl%C3%A1n%2C%20Sin.!5e0!3m2!1ses-419!2smx!4v1674614975521!5m2!1ses-419!2smx" loading="lazy" className={styles.map}></iframe>

            </div>
        </section>
    );
}