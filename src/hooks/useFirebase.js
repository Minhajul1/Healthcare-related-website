import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState([]);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
            .then(resut => {
                console.log(resut.user);
        })
    }
    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({})
        })
    }
    // ---------Observe users--------
    useEffect( () => {
        onAuthStateChanged(auth, (user) =>{
            if (user) {
                setUser(user);
            }
        });
    }, [])

    return{
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;