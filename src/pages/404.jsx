import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import lost from "../img/lost.jpg";

export default function NotFound() {
  return (
    <>
      <div class="bg-gray-900 min-h-screen">
        <div class="mx-auto flex flex-col text-2xl justify-center pt-32 text-white">
          <p class="mx-auto flex justify-center mt-6">ERROR 404</p>
          <img
            src={lost}
            class="w-80 rounded-2xl mx-auto flex justify-center mt-4"
          />
          <p class="mx-auto flex justify-center mt-6">
            Looking a little lost there...
          </p>
        </div>

        <Link to={"/"}>
          <button class="mb-22 mx-auto flex justify-center mt-8 bg-indigo-500 hover:bg-indigo-900 hover:text-white p-2 rounded">
            Go Back Home
          </button>
        </Link>
      </div>
    </>
  );
}
