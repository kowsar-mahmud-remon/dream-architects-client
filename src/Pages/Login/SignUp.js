import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login.jpg';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  useTitle('SignUp');

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';


  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateUserProfile(name, photoURL);

        // get jwt token
        fetch('https://dream-architects-server.vercel.app/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            localStorage.setItem('token', data.token);
            navigate(from, { replace: true });
          });

      })
      .catch(error => {
        console.error(error);
      });

  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    };
    updateUserProfile(profile)
      .then(() => { })
      .catch(error => console.error(error));
  };


  return (
    <div className="hero w-full my-10">
      <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className='w-3/4 mx-auto' src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
          <h1 className="text-5xl text-center font-bold text-indigo-600">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" name='photoURL' placeholder="photo URL" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="email" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />

            </div>
            <div className="form-control mt-6">
              <input className="btn btn-secondary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className='text-center'>Already have an account? <Link className='text-indigo-600' to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;