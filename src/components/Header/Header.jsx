import "./header.css";
import {
  AboutIcon,
  HomeIcon,
  ProfileIcon,
  SettingsIcon,
  LogoutIcon,
} from "../Icons/Icons";

const Header = () => {
  const navigation = [
    {
      id: 0,
      title: "Home",
      icon: <HomeIcon />,
    },
    {
      id: 1,
      title: "About",
      icon: <AboutIcon />,
    },
    {
      id: 2,
      title: "Profile",
      icon: <ProfileIcon />,
    },
    {
      id: 3,
      title: "Settings",
      icon: <SettingsIcon />,
    },
    {
      id: 5,
      title: "LogOut",
      icon: <LogoutIcon />,
    },
  ];

  return (
    <header>
      <nav>
        <ul>
          {navigation.map((nav) => (
            <li key={nav.id}>
              <a href="#">
                {nav.icon}
                <span>{nav.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
