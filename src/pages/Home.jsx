import { Menubar, InputText, Avatar } from "primereact";
import React from "react";
import lost from "../img/lost.jpg";
import logo from "../img/PrivacyCureLogo.png";
import "../index.css";

export default function Home() {
  return (
    <>
      {/* <div className="flex">
        <div className="p-6 w-2 bg-blue-100">
          <img src={logo} height={"60px"} />
          <div className="mt-6 py-2">Home</div>
          <div className="mt-4 py-2">dddd</div>
          <div className="mt-4 py-2">dddd</div>
          <div className="mt-4 py-2">dddd</div>
          <div className="mt-4 py-2">dddd</div>

          <div style={{ bottom: 30, position: "fixed" }}>
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
              className="mr-2"
              size="large"
              shape="circle"
            />
            <div className="">Account Name ds</div>
            <div className="">Account Name ds</div>
          </div>
        </div>

        <div className="bg-blue-300 p-6 min-h-screen col ">
          <div className="text-xl">Welcome to your dashboard!!</div>
        </div>
      </div> */}

      <div className="bg-blue-800 min-h-screen">
        <div className="p-8 text-white md:text-4xl sm:text-2xl ">
          <div className="md:mt-6 sm:mt-0">
            Thank you for signing up to be apart of us!
          </div>
          {/* <div className="mt-4">Dashboard features are coming soon...</div> */}
        </div>
      </div>
    </>
  );
}
