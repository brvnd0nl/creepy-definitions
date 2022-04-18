import styles from '../styles/FormularioBusqueda.module.css'

const FormularioBusqueda = ({search, setSearch}) => {
    const handleSubmit = e => {
        e.preventDefault;
        setSearch(true);
        console.log("Buscando...");
    };
    return(
        <div className={styles.contenedor}>
            <h4 className={`heading ${styles.titulo}`}>Diccionario de una Cacorra.</h4>
            <form className={styles.formulario}>
                <input type="text" className={styles.textbox} placeholder="Escriba aquí"></input>
                <input type="button" value="Consultar" className={styles.submitButton} onClick={e => handleSubmit(e)}></input>                
            </form>
        </div>
    );
};

export default FormularioBusqueda;