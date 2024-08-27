import React from "react";
import { Link } from "@nextui-org/react";
import logo from "/public/assets/AlgoArchive.png";

export default function Logo() {
  // After receiving Anthony's API to user's submissions, will implement logic to list their submissions. The formatting and how this will look will have to be discussed
  return (
    <Link color="foreground" href="/">
      <img src={logo.src} alt="Logo" width="18" height="18" />
      <p className="font-bold text-inherit text-white">lgoArchive</p>
    </Link>
  )
}