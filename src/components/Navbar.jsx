import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    // <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center border-solid border-2 border-yellow-900">
    <header className="w-full py-5 sm:px-10 px-5  justify-between border-2 border-yellow shadow-lg sticky top-0 z-50 bg-slate-800">
  

      <nav className="flex w-full screen-max-width">
        <img className="mx-2 pt-0 cursor-pointer" src={appleImg} alt="Apple" width={14} height={18} /> 

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>

        <div className="relative ml-3">
          <div>
            <button
              // type="button"
              // className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              // id="user-menu-button"
              // aria-expanded="false"
              // aria-haspopup="true"
            >
             
              <img className="ml-4 mt-0 h-8 w-8 rounded-full " src="https://avatars.githubusercontent.com/u/124456653?v=4" alt="User avatar" />
            </button>
          </div>

          {/* <div
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex="-1"
          >
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
          </div> */}

        </div>

      </nav>
    </header>
  );
};

export default Navbar;
