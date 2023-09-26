"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import LoginModal from "./LoginModel";
import NavbarDrawer from "./NavbarDrawer";
import Categories from "./Categories";
import { useDispatch } from "react-redux";
import { useGetUserDetailsQuery } from "@/app/store/authService";
import { setCredentials } from "@/app/store/authSlice";

function Navbar() {
  const dispatch = useDispatch();

  const { data, isFetching } = useGetUserDetailsQuery("userDetails", {
    // perform a refetch every 15mins
    pollingInterval: 900000,
  });

  // console.log(data); // user object

  useEffect(() => {
    // console.log(data);
    if (data) dispatch(setCredentials(data));
  }, [data, dispatch]);

  return (
    <nav className="navbar navbar-center  w-full justify-around mt-3 text-[#686868]  z-50 ">
      <div className="z-50">
        <Categories />
      </div>

      <div>
        <Link
          href="/"
          className="font-bold text-2xl tracking-widest font-serif text-black"
        >
          LuxeLair
        </Link>
      </div>

      <div className="flex gap-6">
        <LoginModal />
        <NavbarDrawer />
      </div>
    </nav>
  );
}

export default Navbar;
