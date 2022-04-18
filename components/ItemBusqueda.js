import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/ItemBusqueda.module.css'

const ItemBusqueda = ({item}) => {
    const limpiarFormulario = () => {
        setSearch(false);
        console.log("Limpiando...");
    };
    
    return(
        <>
            <div className={styles.contenedorTitulo}>
                <h2>{item.titulo}</h2>
                <a className={styles.btnDelete} onClick={() => limpiarFormulario()}>
                    <FontAwesomeIcon icon={faDeleteLeft} size="1x" fixedWidth />
                </a>
            </div>
            <p>
                {item.detalle}
            </p>
        </>
    );
};

export default ItemBusqueda;