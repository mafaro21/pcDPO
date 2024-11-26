import { Menubar, InputText, Avatar } from "primereact";
import React from "react";
import lost from "../img/lost.jpg";
import logo from "../img/PrivacyCureLogo.png";

export default function Home() {
  return (
    <>
      {/* failed navbar  */}
      {/* <div
        style={{
          background: "linear-gradient(to right, #fff 1%, #083D77 100%)",
          borderBottom: "#083D77 solid 1px",
        }}
        className="sticky top-0 z-10  grid"
      >
        <img
          src={logo}
          alt="Logo"
          height="70px"
          className="mr-6 pl-5 col-fixed"
        />

        <div className="flex space-x-6 justify-end mt-3 col mr-5">
          <div className="mx-auto"></div>
          <div>Navbar</div>
          <div>Navbar</div>
        </div>
      </div> */}

      <div className="grid w-full">
        <div className="col-1.5 flex flex-column p-6 bg-red-200">
          <img src={logo} height={"60px"} />
          <div className="mt-6 py-3">Home</div>
          <div className="mt-4 py-3">dddd</div>
          <div className="mt-4 py-3">dddd</div>
          <div className="mt-4 py-3">dddd</div>
          <div className="mt-4 py-3">dddd</div>

          <div style={{ bottom: 30, position: "fixed" }}>
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
              className="mr-2"
              size="large"
              shape="circle"
            />
            <div className="">Account Name over here</div>
            <div className="">Account Name over here</div>
            <div className="">Account Name over here</div>
          </div>
        </div>

        <div className="bg-blue-100 p-6 min-h-screen col">
          <div className="text-xl">Welcome to the dashboard!!</div>
        </div>
      </div>
    </>
  );
}
