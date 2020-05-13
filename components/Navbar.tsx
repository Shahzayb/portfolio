import { NextPage } from 'next';
import Link from 'next/link';
import HamburgerMenu from 'react-hamburger-menu';
import { useMenu } from '../context/menu';

const Navbar: NextPage = () => {
  const { toggleMenu, open } = useMenu();
  return (
    <nav className="bg-transparent absolute top-0 left-0 right-0 h-16 flex items-center justify-between px-4 md:px-8 py-4">
      <div>
        <Link href="/">
          <a>
            <img
              src="https://res.cloudinary.com/shahzayb/image/upload/w_30/v1588189340/portfolio/s-white.png"
              alt="Shahzaib"
            />
          </a>
        </Link>
      </div>
      <button
        onClick={() => {
          toggleMenu();
        }}
        className="z-20 fixed top-0 right-0 flex justify-center items-center focus:outline-none px-4 md:px-8 py-4"
      >
        {!open && (
          <div className="pr-5 uppercase tracking-widest hidden sm:block">
            menu
          </div>
        )}
        <HamburgerMenu
          isOpen={open}
          menuClicked={() => {}}
          // width={18}
          height={25}
          // strokeWidth={1}
          // rotate={0}
          color="white"
          // borderRadius={0}
          // animationDuration={0.5}
        />
      </button>
    </nav>
  );
};

export default Navbar;
