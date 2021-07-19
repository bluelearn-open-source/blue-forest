import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'

import firebase from '../utils/firebaseClient';
import Home from "../components/HomePage";
import { useAuthState} from 'react-firebase-hooks/auth'
export default function HomePage() {
    const [user,loading,error] = useAuthState(firebase.auth());
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            if (user===null&&loading==false){
                router.push('/login');
            }
        }, 1500);
        
    }, [])
    console.log("User: ",user," | Loading: ",loading)
	// return <AuthScreen/>
	return <Home />;
}
