import { SignIn } from "./Sign";
import { useState } from "react";

// import clsx from "clsx"

// import { ScrollObserver } from "@/components/ScrollObserver"

export function NavBar() {
  const [signInOpen, setSignInOpen] = useState(false);

  const handleSignInClick = () => {
    setSignInOpen(true);
  };

  const handleCloseSignIn = () => {
    setSignInOpen(false);
  };
  return (
    <>
      <header className="-mt-3 mx-auto max-w-7xl px-1 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center space-x-3 list-none">
        <div className="flex items-center space-x-4">
          <img
            src="./src/assets/Vcomfort.jpg"
            alt=""
            className="h-16 max-w-40 flex border-2 rounded-full border-gray-200 hover:opacity-75 cursor-pointer"
          />
          <li className="bg-orange-300 rounded-full p-3">
            Bienvenid@ a V-Comfort! tu e-commerce de confianza
          </li>
        </div>
        <div className="flex flex-wrap justify-between items-center space-x-4 w-full sm:w-auto mt-4 sm:mt-0">
          <button className="p-2 hover:bg-gray-300 rounded-3xl hover:dark:bg-gray-800 ">
            <a href="/">Home</a>
          </button>
          <button
            onClick={handleSignInClick}
            className="p-2 hover:bg-gray-800 rounded-3xl"
          >
            Inicia sesion! 👤
          </button>
          <button className="p-2  hover:bg-gray-800 rounded-full pr-2">
            🛒
          </button>
          <input
            type="text"
            placeholder="Que es lo que buscas?"
            className="mt-2 text-center max-w-full w-full sm:max-w-md bg-gray-100 border-2 p-2 hover:bg-gray-300 rounded-3xl"
          />
        </div>
      </header>

      {/* Ventana emergente de SignIn */}
      {signInOpen && (
        <div className=" fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-gray-800 p-8 rounded-3xl">
            {/* Aquí puedes incluir el componente SignIn */}
            <SignIn />
            <button
              onClick={handleCloseSignIn}
              className="absolute top-3  mt-10 text-gray-200"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
