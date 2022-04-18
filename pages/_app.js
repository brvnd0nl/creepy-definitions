import { AuthContextProvider } from '../context/AuthContext'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {  

  return(
    <>
      <AuthContextProvider>
        <Component 
          {...pageProps}
        />
      </AuthContextProvider>
    </>
  );
}

export default MyApp
