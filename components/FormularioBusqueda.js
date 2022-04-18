import {useState} from 'react'
import {database} from '../config/firebase'
import {collection, getDocs} from 'firebase/firestore'
import styles from '../styles/FormularioBusqueda.module.css'
import { useAuth } from '../context/AuthContext'

const FormularioBusqueda = ({search, setSearch, setDictionaryArray}) => {
    const [word, setWord] = useState("");
    const {idUser} = useAuth();

    const handleSubmit = async e => {
        e.preventDefault;
        if(!word){
            alert("Rellene los campos e intente nuevamente.");
            return;

        }
        await getDictonaryArray(word);
        setSearch(true);
    };

    const getDictonaryArray = async (word) => {
        const dbInstance = collection(database, 'dictionary');
        getDocs(dbInstance)
        .then((data) => {
            const results = data.docs.map((item) => {
                return { ...item.data(), id: item.id }
            });

            const resultsFilter = results.filter((item) => item.titulo.includes(word));

            console.log("filter");
            console.log(resultsFilter);
            setDictionaryArray(resultsFilter);

        });
    };


    return(
        <div className={styles.contenedor}>
            <h4 className={`heading ${styles.titulo}`}>Diccionario de una Cacorra.</h4>
            <form className={styles.formulario}>
                <input type="text" className={styles.textbox} onChange={(e) => setWord(e.target.value)} placeholder="Escriba aquí"></input>
                <input type="button" value="Consultar" className={styles.submitButton} onClick={e => handleSubmit(e)}></input>                
            </form>
        </div>
    );
};

export default FormularioBusqueda;