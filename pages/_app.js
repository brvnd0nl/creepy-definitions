import {useState} from 'react'
import { AuthContextProvider } from '../context/AuthContext';
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
