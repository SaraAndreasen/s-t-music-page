import React from "react";
import Image from "next/image";
import logo from "../assets/img/sleep-token-logo.png";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="flex-grow-1 d-flex justify-content-center position-relative">
          <div className="logo-container">
            <Image src={logo} alt="Sleep Token logo" className={styles.logo} />
          </div>
        </div>
        <div className="col-auto">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      </div>
    </nav>
  );
}
