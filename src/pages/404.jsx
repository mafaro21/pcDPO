import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import lost from "../img/lost.jpg";
import { Image } from "primereact";
import { Button } from "primereact/button";

export default function NotFound() {
  return (
    <div className="w-full p-1 bg-blue-900 min-h-screen">
      <div className="p-7 card flex justify-content-center flex-column">
        <div className="mx-auto text-white text-3xl font-bold">ERROR 404</div>
        <img
          src={lost}
          // height={"430px"}
          // width="80%"
          className="mx-auto mt-6 border-round-xl w-full lg:w-4 md:w-6 sm:w-12 h-auto  sm:h-23rem md:h-25rem lg:h-30rem"
        />
        <div className="mx-auto text-white mt-4 text-xl">
          Looking a bit lost there..
        </div>
        <Link to={"/"}>
          <Button
            label="Go Back"
            className="mt-4 p-2 mb-4 mx-auto flex justify-content-center"
            style={{ textDecoration: "none" }}
          />
        </Link>
      </div>
    </div>
  );
}
