import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch();
  };

  const menuItems = <>
    <li className='font-semibold'><Link to='/'>Home</Link></li>
    <li className='font-semibold'><Link to='/services'>Services</Link></li>
    <li className='font-semibold'><Link to='/blog'>Blog</Link></li>

    {
      user?.email ?
        <>
          <li className='font-semibold'><Link to='/create'>Add Service</Link></li>
          <li className='font-semibold'><Link to='/review'>My Reviews</Link></li>
          <li className='font-semibold'>
            <button onClick={handleLogOut} className='btn btn-ghost normal-case font-semibold text-base'>Log Out</button>
          </li>
        </>

        :
        <li className='font-semibold'><Link to='/login'>Login</Link></li>
    }

  </>;

  const navbarShadow = {
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.4)',
  };

  return (
    <div className='sticky top-0 z-10' style={navbarShadow}>
      <div className="navbar h-20 bg-base-200 p-0">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link to='/' className="flex items-center font-semibold normal-case text-xl pl-0">
            <img className='h-14' src={logo} alt="" />
            <h2 className='text-2xl ml-1'>Dream Architects</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;