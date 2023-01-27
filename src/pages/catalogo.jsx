import styles from '../assets/css/catalogo.module.css';

import { Card } from '../components/card';
import { Ruta } from '../components/ruta';

import img from '../assets/images/Vestido_instylebyak.jpg'
import imgAvif from '../assets/images/Vestido_instylebyak.avif'
import imgWebp from '../assets/images/Vestido_instylebyak.webp'

import img2 from '../assets/images/Vestido_rojo_brillos.jpg'
import imgAvif2 from '../assets/images/Vestido_rojo_brillos.avif'
import imgWebp2 from '../assets/images/Vestido_rojo_brillos.webp'

import img3 from '../assets/images/Vestido_rojo_noche.jpg'
import imgAvif3 from '../assets/images/Vestido_rojo_noche.avif'
import imgWebp3 from '../assets/images/Vestido_rojo_noche.webp'

export function Catalogo() {
    return (
        <section className={`${styles.catalogo} contenedor`}>
            <h2 className='titulo'>Catalogo</h2>
            <Ruta ruta='Catalogo' />
            <div className={styles.contenedorCards}>
                <Card img={img} imgAvif={imgAvif} imgWebp={imgWebp} />
                <Card img={img2} imgAvif={imgAvif2} imgWebp={imgWebp2} />
                <Card img={img3} imgAvif={imgAvif3} imgWebp={imgWebp3} />    
            </div>
        </section>        
    )
}