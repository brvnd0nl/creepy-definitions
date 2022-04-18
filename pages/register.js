import Link from 'next/link'
import {useState} from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context/AuthContext'
import styles from '../styles/register.module.css'

const register = () => {
    const router = useRouter();
    const {signUp} = useAuth();
    const [userData, setUserData] = useState({
        nombre: '',
        usuario: '',
        email : '',
        password : ''
    });

    const guardarDatosUsuario = (item, valor) => {
        setUserData(
            {
                ...userData,
                [item] : valor
            }
        )
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {email, password} = userData;

        if(!email || !password){
            alert('Rellenar los campos');
            return;
        }

        try {
            await signUp(email, password);
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
                        <h3 className={styles.titulo}>Registro</h3>
                        <div className={styles.textbox}>
                            <label>Nombre</label>
                            <input type="text" name='nombre' id="TXT_sNombre" onChange={(e) => guardarDatosUsuario(e.target.name, e.target.value)}></input>
                        </div>
                        <div className={styles.textbox}>
                            <label>Usuario</label>
                            <input type="text" name='usuario' id="TXT_sUsuario" onChange={(e) => guardarDatosUsuario(e.target.name, e.target.value)}></input>
                        </div>
                        <div className={styles.textbox}>
                            <label>Email</label>
                            <input type="email" name='email' id="TXT_sEmail" onChange={(e) => guardarDatosUsuario(e.target.name, e.target.value)}></input>
                        </div>
                        <div className={styles.textbox}>
                            <label>Contraseña</label>
                            <input type="password" name='password' id="TXT_sContrasena" onChange={(e) => guardarDatosUsuario(e.target.name, e.target.value)}></input>
                        </div>
                        <input type="button" className={styles.btnSubmit} value="Crear Cuenta" onClick={(e) => handleSubmit(e)}></input>
                        <p>¿Tienes usuario? <Link href="/login">Inicia Sesión</Link></p>
                    </form>
                </div>                
            </div>
        </>
    );
};

export default register;