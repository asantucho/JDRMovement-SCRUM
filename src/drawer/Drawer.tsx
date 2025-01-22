import React, { Fragment, useState } from 'react';
import type { ReactNode } from 'react';

interface DrawerProps {
  open: boolean;
  toggleHandler: () => void;
  children: ReactNode;
  closeButton?: ReactNode;
  closeButtonStyle?: React.CSSProperties;
  drawerHandler: ReactNode;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  drawerStyle?: React.CSSProperties;
  closeBtnStyle?: React.CSSProperties;
}

const Drawer: React.FC<DrawerProps> = ({
  children,
  closeButton,
  drawerHandler,
  placement = 'left',
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleHandler = () => {
    setOpen(!open);
  };

   const handleItemClick = () => {
    setOpen(false); // Close the drawer when an item is clicked
  };

  return (
    <Fragment>
      <div className={`fixed inset-0 overflow-hidden ${open ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 transition-opacity" onClick={toggleHandler}>
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <section className={`absolute inset-y-0 ${placement === 'left' ? 'left-0' : 'right-0'} max-w-full flex`}>
            <div className="relative w-screen max-w-md">
              <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                {closeButton && (
                  <div className="mt-4 text-center">
                      <button onClick={toggleHandler} className="focus:outline-none">
                        <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                )}
                <div className="px-4 py-4 text-lg" onClick={handleItemClick}>{children}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
        {!open && drawerHandler && (
        <div
          className="drawer__handler"
          style={{ display: 'inline-block' }}
          onClick={toggleHandler}
        >
          {drawerHandler}
        </div>
      )}
    </Fragment>
  );
};

export default Drawer;
