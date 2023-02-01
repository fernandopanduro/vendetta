import styles from '../assets/css/vestidos.module.css';

import { Card } from './card';
import { Productos } from '../vestidos';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export function Vestidos() {
    return (
        <section id='vestidos' className={`${styles.vestidos} contenedor`}>
            <h2 className='titulo'>Vestidos</h2>
            <div className={styles.contenedorCard}>
                <Card id={Productos[0].Id} descripcion={Productos[0].Descripcion} img={Productos[0].ImagnesJpg[0]} imgAvif={Productos[0].ImagnesAvif[0]} imgWebp={Productos[0].ImagnesWebp[0]} />
                <Card id={Productos[1].Id} descripcion={Productos[1].Descripcion} img={Productos[1].ImagnesJpg[0]} imgAvif={Productos[1].ImagnesAvif[0]} imgWebp={Productos[1].ImagnesWebp[0]} />
                <Card id={Productos[2].Id} descripcion={Productos[2].Descripcion} img={Productos[2].ImagnesJpg[0]} imgAvif={Productos[2].ImagnesAvif[0]} imgWebp={Productos[2].ImagnesWebp[0]} />
            </div>
            <Link className={styles.link} to='/catalogo'>Ver mas <AiOutlineArrowRight size={28} /></Link>
        </section>
    )
}