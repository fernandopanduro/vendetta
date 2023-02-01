import styles from '../assets/css/footer.module.css';

import {FaPhoneAlt} from 'react-icons/fa';
import {BsInstagram, BsWhatsapp} from 'react-icons/bs';
import { Fade } from 'react-reveal';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerContenedor} contenedor`}>
                <Fade bottom>
                    <div>
                        <h2 className={styles.titulo}>VENDETTA</h2>    
                        <p >Tienda de ropa para mujeres</p>
                    </div>
                    <div className={styles.menuList}>
                        <div>
                            <h3 className={styles.subtitulo}>Menu</h3>
                            <ul className={styles.list}>
                                <li><a name='link de secciones' href="#inicio">Inicio</a></li>
                                <li><a name='link de secciones' href="#vestidos">Vestidos</a></li>
                                <li><a name='link de secciones' href="#rentar">Rentar</a></li>
                                <li><a name='link de secciones' href="#visitanos">Visitanos</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className={styles.subtitulo}>Oficina</h3>
                            <ul className={styles.list}>
                                <li>Lunes a Viernes</li>
                                <li>10 am - 14 pm</li>
                                <li>17 am - 20 pm</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className={styles.subtitulo}>Contactanos</h3>
                            <ul className={styles.contacto}>
                                <li><a target='_blank' name='links a telefono' href='tel:6693251837'><FaPhoneAlt size={21} /></a></li>
                                <li><a target='_blank' name='links a instagram' href='https://www.instagram.com/vendetta_vestidos/'><BsInstagram size={21} /> </a></li>
                                <li><a target='_blank' name='links a whatsapp' href='https://api.whatsapp.com/send/?phone=526693251837&text&type=phone_number&app_absent=0'><BsWhatsapp size={21} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className={`${styles.parrafo}`}>Vendetta. Todos los derechos revervados</p>
                        <p className={`${styles.parrafo}`}>Terminos y Condicionos</p>
                    </div>
                </Fade>
            </div>
        </footer>
    )
}