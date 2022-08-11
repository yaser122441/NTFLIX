import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 100) {
        setShow(false);
      } else {
        setShow(true);
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <nav
      className={`h-[60px] flex justify-between p-[20px] fixed z-50 w-full duration-300 items-center ${
        show && "bg-[#141414]"
      }`}
    >
      <Link to="/">
        <img
          src={require("./Assets/navLogo.png")}
          className="w-[111px] object-contain"
          alt="netflix logo"
        />
      </Link>
      <div className="space-x-6">
        <Link
          to="signIn"
          className="text-black bg-white p-2 rounded hover:bg-slate-300 font-bold"
        >
          Sign In
        </Link>
        <Link
          to="signup"
          className="text-white bg-netflixRed rounded p-2 hover:bg-red-500 font-bold"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
