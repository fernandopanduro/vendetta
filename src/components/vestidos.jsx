import styles from '../assets/css/vestidos.module.css';

import { Card } from './card';

import { AiOutlineArrowRight } from 'react-icons/ai';

import img from '../assets/images/Vestido_instylebyak.jpg'
import imgAvif from '../assets/images/Vestido_instylebyak.avif'
import imgWebp from '../assets/images/Vestido_instylebyak.webp'

import img2 from '../assets/images/Vestido_rojo_brillos.jpg'
import imgAvif2 from '../assets/images/Vestido_rojo_brillos.avif'
import imgWebp2 from '../assets/images/Vestido_rojo_brillos.webp'

import img3 from '../assets/images/Vestido_rojo_noche.jpg'
import imgAvif3 from '../assets/images/Vestido_rojo_noche.avif'
import imgWebp3 from '../assets/images/Vestido_rojo_noche.webp'

export function Vestidos() {
    return (
        <section id='vestidos' className={`${styles.vestidos} contenedor`}>
            <h2 className='titulo'>Vestidos</h2>
            <div className={styles.contenedorCard}>
                <Card img={img} imgAvif={imgAvif} imgWebp={imgWebp} />
                <Card img={img2} imgAvif={imgAvif2} imgWebp={imgWebp2} />
                <Card img={img3} imgAvif={imgAvif3} imgWebp={imgWebp3} />    
            </div>
            <a className={styles.link} href="">Ver mas <AiOutlineArrowRight size={28} /></a>
        </section>
    )
}