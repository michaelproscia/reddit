import DarkMode from "./DarkMode";
import hamburger from "../assets/hamburgerMenu.svg";
import UserAccount from "./UserAccount";

function Header({ setIsOpen, darkMode, setDarkMode }) {
  return (
    <header className="bg-slate-700 p-3 flex justify-between items-center px-10 dark:bg-red-500">
      <h1 className="text-white font-bold text-2xl">
        Reddit<span className="text-blue-300">Lite</span>
      </h1>
      <div className="flex gap-3 items-center">
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
        <UserAccount />
        <img
          src={hamburger}
          className="max-h-8 hover:cursor-pointer hover:bg-slate-800"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
    </header>
  );
}

export default Header;
