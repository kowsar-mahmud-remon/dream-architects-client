import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login.jpg';
import { AuthContext } from '../../contexts/AuthProvider';
import SocialLogin from './SocialLogin';

const Login = () => {
  const { login } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(error => console.log(error));
  };
  return (
    <div className="hero w-full my-10">
      <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className='w-3/4 mx-auto' src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
          <h1 className="text-5xl text-center font-bold text-indigo-600">Login</h1>
          <form onSubmit={handleLogin} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-2">
              <input className="btn btn-secondary" type="submit" value="Login" />
            </div>
          </form>
          <SocialLogin></SocialLogin>
          <p className='text-center'>New to Dream Architects, <Link className='text-indigo-600' to='/signup'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;