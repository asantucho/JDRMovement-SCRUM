import React, { useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { Background } from '@/background/Background';
import Drawer from '@/drawer/Drawer'; // Import the Drawer component

type INavbarProps = {
  logo: ReactNode;
  children?: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Background color="bg-gray-200" width="w-full">
      <div
        id="header"
        className="inset-x-0 top-0 z-50 flex items-center justify-between bg-gray-200 px-10"
      >
        <div>
          <Link href="/">{props.logo}</Link>
        </div>

        {/* Drawer Component */}
        <Drawer
          open={isMenuOpen} // Pass the state of the menu to the Drawer's open prop
          toggleHandler={toggleMenu} // Pass the toggleMenu function as the toggleHandler
          placement="right" // Set the placement of the Drawer
          closeButton={
            // Provide a close button for the Drawer
            <button
              onClick={closeMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          }
          closeBtnStyle={{
            // Style for the close button
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            cursor: 'pointer',
          }}
          drawerHandler={
            // Provide the burger menu button as drawerHandler
            <div className="relative flex items-center lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 focus:outline-none"
              >
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          }
        >
          <ul
            className="navbar lg:flex lg:items-center lg:space-x-4 lg:text-lg lg:font-medium lg:text-gray-800"
            style={{ fontWeight: 'bold', cursor: 'pointer' }}
          >
            {props.children}
          </ul>
        </Drawer>

        {/* Navigation Menu (Visible on Large Screens) */}
        <nav className="lg:text-md hidden lg:relative lg:flex lg:items-center lg:space-x-4 lg:font-medium lg:text-gray-800">
          <ul
            className="navbar lg:flex lg:items-center lg:space-x-4 lg:text-lg lg:font-medium lg:text-gray-800"
            style={{ fontWeight: 'bold', cursor: 'pointer' }}
          >
            {props.children}
          </ul>
        </nav>
      </div>

      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }

          .navbar :global(li:hover) {
            @apply bg-gray-800;
            @apply text-white;
            @apply rounded-md;
          }
        `}
      </style>
    </Background>
  );
};

export { NavbarTwoColumns };
