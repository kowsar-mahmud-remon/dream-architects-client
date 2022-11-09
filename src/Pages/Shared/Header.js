import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
  const { user } = useContext(AuthContext);

  const menuItems = <>
    <li className='font-semibold'><Link to='/'>Home</Link></li>
    <li className='font-semibold'><Link to='/services'>Services</Link></li>
    <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
  </>;
  return (
    <div>
      <div className="navbar h-20 bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl pl-0">
            <img className='h-14' src={logo} alt="" />
            <h2 className='text-2xl ml-1'>Dream Architects</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.email ?
              <button className='btn btn-ghost font-semibold'><Link to='/review'>My Reviews</Link></button>

              :
              <button className='btn btn-ghost font-semibold'><Link to='/login'>Login</Link></button>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;