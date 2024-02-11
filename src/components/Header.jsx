import React from "react";

function Header() {
  return (
    <div className="h-[70px] bg-landingbg flex items-center justify-center text-teal">
      <div className="max-w-[1280px] w-full flex justify-between items-center mx-3">
        <div className="text-2xl">LOGO</div>
        <div>Menu</div>
        <div>Cart</div>
      </div>
    </div>
  );
}

export default Header;
