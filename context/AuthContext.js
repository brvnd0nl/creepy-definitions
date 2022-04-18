import {createContext, useContext, useEffect, useState} from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth } from '../config/firebase'

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                });
            }else{
                setUser(null);
            }
            setLoading(false);
        });

        return unsubscribe();

    },[]);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = async () => {
        setUser(null);
        await signOut(auth);
    };

    return(
        <AuthContext.Provider value={{user, logIn, signUp, logOut}}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};