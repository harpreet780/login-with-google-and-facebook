// import FacebookLogin from '@greatsumini/react-facebook-login';
import React from 'react';
import FacebookLogin from 'react-facebook-login';


const LoginWithFacebook = () => {
    // app name: harpreet-practice-login
    // email: qa.kmit@gmail.com 
    // pass: Test@123
    // HTTPS=true npm start (use for run : to run local on https---for facebook login)
    // appId = 1230551687852179
    // live appId of authorify: 882095393167134
    // create surge for https: https://facebook-login.surge.sh


    return (
        <div className='mt-4 '>
            {/* <div>
                <FacebookLogin
                    appId="882095393167134"
                    fields="name,email"
                    onSuccess={(response) => {
                        console.log('Login Success!', response);
                    }}
                    onFail={(error) => {
                        console.log('Login Failed!', error);
                    }}
                    onProfileSuccess={(response) => {
                        console.log('Get Profile Success!', response);
                    }}
                    autoLoad={true}
                    style={{
                        backgroundColor: '#4267b2',
                        color: '#fff',
                        fontSize: '16px',
                        padding: '8px 24px',
                        border: 'none',
                        borderRadius: '4px',
                        margin: '5px'
                    }}
                >
                    Login Via facebook
                </FacebookLogin>
            </div> */}
            <div>
                <FacebookLogin
                    appId="1230551687852179"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={() => console.log('clicked')}
                    callback={() => console.log("callback")}
                />
            </div>
        </div>
    )
}

export default LoginWithFacebook;