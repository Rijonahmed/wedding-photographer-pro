import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import app from '../../Firebase/Firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Social = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
  const location = useLocation();
    const auth = getAuth(app)
    let form = location.state?.from?.pathname || "/";

  if (user) {
    navigate(form, { replace: true });
  }
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