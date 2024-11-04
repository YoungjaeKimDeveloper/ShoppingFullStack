import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaPlusSquare } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import IconBox from "./IconBox";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="m-auto w-full rounded-xl rounded-b-none rounded-t-lg bg-blue-900 py-4">
      <nav className="m-auto flex w-3/4 items-center justify-between">
        <Link to={"/"} className="title flex items-center text-white">
          <h1 className="mr-2 text-2xl font-bold uppercase">product store</h1>
          <FaCartShopping />
        </Link>
        <div className="icons-container flex gap-2">
          <Link to={"/create"}>
            <IconBox icon={<FaPlusSquare />} />
          </Link>
          <IconBox icon={<FaSun />} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
