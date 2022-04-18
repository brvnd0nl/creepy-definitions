import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import styles from '../styles/Header.module.css'
import { useAuth } from '../context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Header = ({pagina}) => {
    const router = useRouter();
    const {user, logOut} = useAuth();
    const handleLogOut = async () =>{
        await logOut();
        router.push("/login");
    };

    return(
        <>
            <header className={pagina === "index" ? styles.headerIndex : styles.header}>
                <div className="contenedor">
                    <div className={styles.barra}>
                        <nav className={styles.navegacion}>
                            <Link href="/">Inicio</Link>
                            <Link href="/nosotros">Nosotros</Link>                            
                            {user ? (
                                <a onClick={() => handleLogOut()}>
                                    <FontAwesomeIcon icon={faArrowRightFromBracket} size="1x" fixedWidth />
                                </a>
                            ) : (
                                <>
                                    <Link href="/login">
                                        <a >
                                            Inicio Sesión
                                        </a>
                                    </Link>
                                    <Link href="/register">
                                        <a className={styles.btnRegister}>
                                            Registrarse
                                        </a>
                                    </Link>
                                </>
                            )}

                            {/* <Link href="/blog">Blog</Link>                             */}
                        </nav>                    
                    </div>
                </div>                     
            </header>
        </>
    );
};

export default Header;