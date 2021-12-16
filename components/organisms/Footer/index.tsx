import React from "react";
import FooterDescription from "./FooterDescription";
import FooterMenus from "./FooterMenus";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <FooterDescription />
            <FooterMenus />
          </div>
        </div>
      </footer>
    </section>
  );
}
