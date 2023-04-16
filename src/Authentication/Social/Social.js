import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import app from '../../Firebase/Firebase.init';

const Social = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user
            console.log(user)
        }) 
        .catch(error => {
            // const signInError = error.message;
            console.log(error)
        })
    }
    return (
        <div>
             <div className="divider w-full">OR</div>
     
      <button onClick={handleGoogleSignIn} className="btn btn-outline w-full ">Continue with google</button>
        </div>
    );
};

export default Social;