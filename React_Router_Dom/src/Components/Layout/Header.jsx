import { NavLink } from "react-router-dom";

export const Header = () => {
  const getStyleAbout = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "red",
    };
  };

  return (
    <>
      <div>
        {/* Header */}
        <header className="bg-gray-800 text-white text-center py-6">
          <h1 className="text-3xl font-bold">My Website</h1>
          <p className="text-gray-300">Welcome to my site 🚀</p>
        </header>

        {/* Navigation */}
        <nav className="bg-gray-900 flex justify-center space-x-8 py-4 shadow-lg">
          {/* Active Links Navigation */}
          {/* First Way Using Callback Function */}
          <NavLink
            to="./"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold"
                : "text-white hover:text-yellow-400"
            }
          >
            Home
          </NavLink>

          {/* Second Way Return Statement Style Attribute*/}
          <NavLink
            to="./Movie"
            className="text-white hover:text-yellow-400"
            style={({ isActive }) => {
              return {
                color: isActive ? "blue" : "red",
              };
            }}
          >
            Movies
          </NavLink>

          {/* Third Way Using Function */}
          <NavLink
            to="./About"
            className="text-white hover:text-yellow-400"
            style={getStyleAbout}
          >
            About
          </NavLink>
          <NavLink to="./Contact" className="text-white hover:text-yellow-400">
            Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
};
