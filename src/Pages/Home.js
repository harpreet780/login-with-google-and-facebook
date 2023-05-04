import React from 'react'
import LoginWithGoogle from '../Components/LoginWithGoogle';
import LoginWithFacebook from '../Components/LoginWithFacebook';

const Home = () => {
  return (
    <div className='app'>
      <div>
        <LoginWithGoogle />
        <LoginWithFacebook />
      </div>
    </div>
  )
}

export default Home;