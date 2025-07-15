import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className='bg-black text-white'>
      <nav className="w-full flex items-center justify-between p-2 ">
        <h3 className="ms-8 text-2xl text-red-500">Router</h3>
        <ul className='list-none flex gap-10 fixed start-[40%] p-2'>
          <li className='cursor-pointer hover:text-red-500'>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500" : ""}>
              Home
            </NavLink>
          </li>
          <li className='cursor-pointer hover:text-red-500'>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500" : ""}>
              About
            </NavLink>
          </li>
          <li className='cursor-pointer hover:text-red-500'>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500" : ""}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div>
          <button className='mx-2 bg-red-700 border-none rounded p-1 px-3 cursor-pointer'>Login</button>
          <button className='mx-2 bg-red-700 border-none rounded p-1 px-3 cursor-pointer'>SignUp</button>
        </div>
      </nav>
    </header>
  );
}
