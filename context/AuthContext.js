import {createContext, useContext, useEffect, useState} from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth, database } from '../config/firebase'
import {collection, getDocs} from 'firebase/firestore'

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [idUser, setIdUser] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                });
                getUserId(user.email);
            }else{
                setUser(null);
            }
            setLoading(false);
        });

        return unsubscribe();

    },[]);

    const getUserId = (username) =>{
        const dbInstance = collection(database, 'users');   
        getDocs(dbInstance)
        .then((data) => {
            const users = data.docs.map((item) => {
                return { ...item.data(), id: item.id }
            });
            
            const result = users.filter((user) => user.email === username)[0].id;
            
            setIdUser(result);
        });
    };

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn = (email, password) => {      
        getUserId(email);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = async () => {
        setUser(null);
        setIdUser("");
        await signOut(auth);
    };

    return(
        <AuthContext.Provider value={{user, idUser, setIdUser, logIn, signUp, logOut}}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};