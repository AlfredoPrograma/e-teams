import Menu from "components/Menu/Menu";
import { useState } from "react";

const NavBar = () => {
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);

  return (
    <nav className="px-24 py-4 bg-primary-500 flex justify-between items-center shadow-md">
      {/* TODO: CREATE ICON BUTTON COMPONENT */}
      <div>
        <i className="fas fa-bars text-white text-2xl"></i>
      </div>

      <div>
        {/* TODO: HERE MUST BE THE NAME */}

        <Menu
          isOpen={isOpenProfileMenu}
          options={["profile", "log out"]}
          openButtonElement={
            <button
              onClick={() => setIsOpenProfileMenu(!isOpenProfileMenu)}
              className="w-full"
            >
              <img
                src="https://ultahost.com/15wOfFis600Us5D1GlqxolpuG3cfhT/uploads/avatar6.png"
                alt="avatar"
                className="w-10 h-10 rounded-full mx-auto"
              />
            </button>
          }
        />
      </div>
    </nav>
  );
};
export default NavBar;
