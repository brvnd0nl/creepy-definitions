import {useEffect, useState} from 'react'
import {database} from '../config/firebase'
import {collection, getDocs} from 'firebase/firestore'
import styles from '../styles/FormularioBusqueda.module.css'
import { useAuth } from '../context/AuthContext';

const FormularioBusqueda = ({search, setSearch}) => {
    const [dictionaryArray, setDictionaryArray] = useState({});
    const {idUser} = useAuth();
    useEffect(() => {
        const dbInstance = collection(database, 'dictionary');
        getDocs(dbInstance)
        .then((data) => {
            setDictionaryArray(data.docs.map((item) => {
                return { ...item.data(), id: item.id }
            }));
        });
    },[]);
    const handleSubmit = e => {
        e.preventDefault;
        setSearch(true);
        console.log("Buscando...");
        console.log(`Buscando por ID ${idUser}`);
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