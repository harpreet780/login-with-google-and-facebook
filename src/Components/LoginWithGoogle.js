import React, { useState } from 'react';
import { GoogleLogin, googleLogout, GoogleOAuthProvider } from '@react-oauth/google';

const LoginWithGoogle = () => {

    //google app name: harpreet-google-login(with localhost)

    const [userCredential, setUserCredential] = useState([]);
    const responseMessage = (response) => {
        setUserCredential(response)
        console.log(response, "ress");
    };

    const errorMessage = (error) => {
        console.log(error);
    };

    console.log(userCredential, "crede")

    return (
        <div>
            <GoogleOAuthProvider
                clientId="506225375850-5hu28drpssm1f0702ni3fgr91mql4gvb.apps.googleusercontent.com"
            >
                <GoogleLogin
                    onSuccess={responseMessage} onError={errorMessage}
                    shape="pill"
                />
            </GoogleOAuthProvider>
        </div>
    )
}

export default LoginWithGoogle;