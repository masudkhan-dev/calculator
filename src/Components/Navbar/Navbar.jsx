import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <main>
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <RiMenu2Fill />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/converter">
                  <li>Converter</li>
                </Link>
                <Link to="/IctCalculator">
                  <li>ICT Calculator</li>
                </Link>
                <Link to="/ScientificCalculator">
                  <li className="px-3 py-2">Scientific Calculator</li>
                </Link>
                <Link to="/Currency">
                  <li className="px-3 py-2">Currency</li>
                </Link>
              </ul>
            </div>
            <Link to="/">
              <p className="btn btn-ghost text-xl">Calculator</p>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <Link to="/">
                <li className="px-3 py-2">Home</li>
              </Link>
              <Link to="/converter">
                <li className="px-3 py-2">Converter</li>
              </Link>
              <Link to="/IctCalculator">
                <li className="px-3 py-2">ICT Calculator</li>
              </Link>
              <Link to="/ScientificCalculator">
                <li className="px-3 py-2">Scientific Calculator</li>
              </Link>
              <Link to="/Currency">
                <li className="px-3 py-2">Currency</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
