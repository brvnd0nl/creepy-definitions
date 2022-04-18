import Link from 'next/link'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context/AuthContext'
import styles from '../styles/login.module.css'

const login = () => {
    const router = useRouter();
    const {user, logIn} = useAuth();
    const [loginData, setLoginData] = useState({
        usuario : "",
        password : ""
    });

    const guardarDatosUsuario = (item, valor) => {
        setLoginData(
            {
                ...loginData,
                [item] : valor
            }
        )
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {usuario, password} = loginData;

        if(!usuario || !password){
            alert('Rellenar los campos');
            return;
        }

        try {
            await logIn(usuario, password);
            router.push('/');
        } catch (error) {
            console.log("error");
            console.error(error);
        }
    };

    return(
        <>
            <div className={`contenedor ${styles.contenedor}`}>
                <div className={styles.formulario}>
                    <form>
                        <h3 className={styles.titulo}>Inicio de Sesión</h3>
                        <div className={styles.textbox}>
                            <label>Usuario</label>
                            <input type="text" name='usuario' id="TXT_sUsuario" onChange={(e) => guardarDatosUsuario(e.target.name, e.target.value)}></input>
                        </div>
                        <div className={styles.textbox}>
                            <label>Contraseña</label>
                            <input type="password" name='password' id="TXT_sContrasena" onChange={(e) => guardarDatosUsuario(e.target.name, e.target.value)}></input>
                        </div>
                        <input type="button" className={styles.btnSubmit} value="Ingresar" onClick={(e) => handleSubmit(e)}></input>
                        <p>¿No tienes usuario? <Link href="/register">Regístrate</Link></p>
                    </form>
                </div>                
            </div>
        </>
    );
};

export default login;