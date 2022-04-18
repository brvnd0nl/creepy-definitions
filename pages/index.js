import {useState, useEffect} from 'react'
import Layout from "../components/Layout"
import FormularioBusqueda from "../components/FormularioBusqueda"
import ResultadoBusqueda from "../components/ResultadoBusqueda"
import styles from "../styles/index.module.css"


export default function Home() {

  const [search, setSearch] = useState(false);

  return (
    <>
      <Layout pagina="index">
        <div className={styles.main}>
          <div className={styles.side_a}>
            <div className="contenedor">              
              <FormularioBusqueda search={search} setSearch={setSearch} />              
            </div>
          </div>
          <div className={styles.side_b}>
            <div className="contenedor">
              {search && (
                <ResultadoBusqueda search={search} setSearch={setSearch} />
              )}
            </div>
          </div>          
        </div>
      </Layout>
    </>
  )
}
