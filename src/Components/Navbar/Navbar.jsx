import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <main className="bg-[#F2F2F2]">
      <div className="container mx-auto">
        <div className="navbar bg-[#F2F2F2]">
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
                  <li className="btn btn-sm">Home</li>
                </Link>
                <Link to="/converter">
                  <li className="btn btn-sm my-3">Converter</li>
                </Link>
                <Link to="/IctCalculator">
                  <li className="btn btn-sm">ICT Calculator</li>
                </Link>
                <Link to="/ScientificCalculator">
                  <li className="btn btn-sm my-3">Scientific Calculator</li>
                </Link>
                <Link to="/Currency">
                  <li className="btn btn-sm">Currency</li>
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
                <li className="btn btn-sm">Home</li>
              </Link>
              <Link to="/converter">
                <li className="btn btn-sm mx-3">Converter</li>
              </Link>
              <Link to="/IctCalculator">
                <li className="btn btn-sm">ICT Calculator</li>
              </Link>
              <Link to="/ScientificCalculator">
                <li className="btn btn-sm mx-3">Scientific Calculator</li>
              </Link>
              <Link to="/Currency">
                <li className="btn btn-sm">Currency</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
