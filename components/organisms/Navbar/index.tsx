import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import NavAuth from "./NavAuth";
import NavToggler from "./NavToggler";

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <Image src="/icon/logo.svg" width={60} height={60} />
          </a>
          <NavToggler />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <NavLink title="Home" active />
              <NavLink title="Games" href="/games" />
              <NavLink title="Rewards" href="/rewards" />
              <NavLink title="Discover" />
              <NavLink title="Global Rank" />
              <NavAuth isLogin />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
