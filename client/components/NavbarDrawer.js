import React from 'react';

function NavbarDrawer() {
  return (
    <div className="drawer drawer-end text-[#686868]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button cursor-pointer hover:text-black"
        >
          Cart
        </label>
      </div>
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 w-1/4 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarDrawer;
