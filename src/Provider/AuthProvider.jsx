import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.init";
import axios from "axios";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');


    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('https://meal-mates-server.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        setLoading(false);
                    })

            } else {
                axios.post('https://meal-mates-server.vercel.app/logout', {}, {
                    withCredentials: true
                })
                    .then(res => {
                        setLoading(false);
                    })
            }
        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        createUserWithEmail,
        loginWithEmail,
        loginWithGoogle,
        logOutUser,
        loading,
        setLoading,
        errorMessage,
        setErrorMessage,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;