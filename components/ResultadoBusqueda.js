import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/ResultadoBusqueda.module.css'

const ResultadoBusqueda = ({search, setSearch}) => {

    const limpiarFormulario = () => {
        setSearch(false);
        console.log("Limpiando...");
    };


    return(
        <>
            <div className={styles.contenedorTitulo}>
                <h2>Test</h2>
                <a className={styles.btnDelete} onClick={() => limpiarFormulario()}>
                    <FontAwesomeIcon icon={faDeleteLeft} size="1x" fixedWidth />
                </a>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacus est, ultrices lacinia vulputate id, rutrum eu turpis. Pellentesque iaculis metus efficitur turpis rutrum tempus. Aliquam libero tellus, tincidunt id dapibus in, dictum ac erat.
            </p>
            <h2>Test 2</h2>
            <p>
                In ac maximus ligula. Pellentesque libero elit, consectetur ac mattis ac, sodales sed odio. Mauris sollicitudin convallis lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean fringilla cursus nisi, ac sodales ipsum.
            </p>
        </>
    );
};

export default ResultadoBusqueda;