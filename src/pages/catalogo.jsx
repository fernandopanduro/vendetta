import styles from '../assets/css/catalogo.module.css';

import { Card } from '../components/card';
import { Ruta } from '../components/ruta';

import { Productos } from '../vestidos';

export function Catalogo() {
    return (
        <section className={`${styles.catalogo} contenedor`}>
            <h2 className='titulo'>Catalogo</h2>
            <Ruta ruta='Catalogo' />
            <div className={styles.contenedorCards}>
                {
                    Productos.map((producto) =><Card  id={producto.Id}key={producto.Id} descripcion={producto.Descripcion} img={producto.ImagnesJpg[0]} imgAvif={producto.ImagnesAvif[0]} imgWebp={producto.ImagnesWebp[0]} />)
                }   
            </div>
        </section>        
    )
}