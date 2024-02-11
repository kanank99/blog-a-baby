import React from "react";

function Header() {
  return (
    <>
      <div className="hidden lg:flex items-center justify-center h-[70px] bg-landingbg text-teal">
        <div className="max-w-[1280px] w-full flex justify-between items-center mx-3">
          <div className="text-2xl">LOGO</div>
          <div className="flex gap-8">
            <a className="flex gap-2">
              Products{" "}
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                class="text-teal-500 h-5 w-5 mt-[0.15rem] group-hover:text-teal-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                fill="currentColor"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </a>
            <a>Reviews</a>
            <a>Blog</a>
            <a>Meet Cara</a>
            <a className="flex gap-2">
              Support{" "}
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                class="text-teal-500 h-5 w-5 mt-[0.15rem] group-hover:text-teal-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                fill="currentColor"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </a>
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="currentColor"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </div>
          <a
            href="#"
            className="flex items-center justify-center text-sm py-2 px-6 rounded-full bg-[#00000010] hover:bg-[#00000020] hover:shadow-lg shadow-cyan-500/50"
          >
            Class Login
          </a>
        </div>
      </div>
      <div className="lg:hidden flex items-center justify-center h-[70px] bg-landingbg text-teal">
        <div className="max-w-[1280px] w-full flex justify-between items-center mx-3 md:mx-6">
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="currentColor"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
          <div className="text-2xl">LOGO</div>
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="currentColor"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Header;
