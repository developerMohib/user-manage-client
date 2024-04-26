
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-base-300 p-4'>
            <NavLink to='/' > Home </NavLink>
            <NavLink to='/users' > Users</NavLink>
            <a className='ml-10 bg-gray-400 font-bold' target='?_blank' href="http://localhost:5000/users"> main array </a>
        </div>
    );
};

export default Navbar;