import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Login() {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("signup");

  const handleModal = (type) => {
    setModalType(type);
    setModal(true);
  };

  return (
    <div className="flex h-screen w-full bg-black overflow-hidden">
      <div className="w-1/2">
        <img src="/images/bg.png" alt="login" className="w-full h-full" />
      </div>
      <div className="login-container">
        <img src="/images/logo.jpg" alt="logo" className="w-40 ml-8" />
        <h1 className="text-6xl text-white font-bold m-12 font-sans">
          See what&apos;s
          <br />
          happening
        </h1>
        <h2 className="text-white text-2xl ml-8">Join Hackatweet today.</h2>
        <button
          onClick={() => {
            handleModal("signup");
          }}
          className="px-4 py-2 ml-8 my-4 bg-[#1D9BF0] text-white rounded-full cursor-pointer hover:bg-[#1D9BF0]/80"
        >
          Sign up
        </button>
        <div className="separator text-white ml-8">
          Already have an account ?
        </div>
        <button
          onClick={() => {
            handleModal("signin");
          }}
          className="px-4 py-2 ml-8 my-4 text-white border rounded-full cursor-pointer hover:bg-[#1D9BF0]/80"
        >
          Sign in
        </button>
      </div>

      {modal &&
        (modalType === "signup" ? (
          <SignUp onClose={() => setModal(false)} />
        ) : (
          <SignIn onClose={() => setModal(false)} />
        ))}
    </div>
  );
}
