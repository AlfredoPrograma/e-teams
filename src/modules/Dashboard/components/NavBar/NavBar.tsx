import { IconButton } from "components/IconButton";
import { Menu } from "components/Menu";
import { MenuItemProps } from "components/Menu/MenuItem";
import { useState } from "react";

const PROFILE_MENU: MenuItemProps[] = [
  {
    text: "Profile",
    icon: <i className="fas fa-user" />,
  },
  {
    text: "Settings",
    icon: <i className="fas fa-cog" />,
  },
  {
    text: "Logout",
    icon: <i className="fas fa-sign-out-alt" />,
    className: "text-danger-500",
  },
];

const NavBar = () => {
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);

  return (
    <nav className="px-24 py-4 bg-primary-500 flex justify-between items-center shadow-md">
      <IconButton onClick={() => console.log("Show sidebar")}>
        <i className="fas fa-bars text-white" />
      </IconButton>

      {/* TODO: HERE MUST BE THE NAME */}
      <Menu
        isOpen={isOpenProfileMenu}
        options={PROFILE_MENU}
        openButtonElement={
          <button
            onClick={() => setIsOpenProfileMenu(!isOpenProfileMenu)}
            className="w-full"
          >
            <img
              src="https://ultahost.com/15wOfFis600Us5D1GlqxolpuG3cfhT/uploads/avatar6.png"
              alt="avatar"
              className="w-12 h-12 rounded-full mx-auto"
            />
          </button>
        }
      />
    </nav>
  );
};
export default NavBar;
