import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="px-6 py-4 bg-primary-500 flex justify-between items-center shadow-md">
      {/* TODO: CREATE ICON BUTTONS */}
      <div>
        <i className="fas fa-bars text-white text-2xl"></i>
      </div>

      <div className="flex gap-4">
        {/* TODO: HERE MUST BE THE NAME */}
        <img
          src="https://ultahost.com/15wOfFis600Us5D1GlqxolpuG3cfhT/uploads/avatar6.png"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </nav>
  );
};
export default NavBar;
