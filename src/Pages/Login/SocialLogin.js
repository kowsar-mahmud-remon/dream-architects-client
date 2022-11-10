import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        console.log(user);
        // navigate(from, { replace: true });
        const currentUser = {
          email: user.email
        };

        // get jwt token
        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            localStorage.setItem('token', data.token);
            // navigate(from, { replace: true });
          });

      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <p className="text-center mx-8 my-3">
        <button onClick={handleGoogleSignIn} className='btn btn-secondary w-full'>Google</button>
      </p>
    </div>
  );
};

export default SocialLogin;