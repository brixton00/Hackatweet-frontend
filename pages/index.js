import { Geist, Geist_Mono } from "next/font/google";

// import Login from "../components/Login";
import Home from "../components/Home";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Index() {
  return (
    <>
      {/* <Login /> */}
      <Home />
    </>
  );
}
