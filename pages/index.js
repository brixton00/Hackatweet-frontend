import { Geist, Geist_Mono } from "next/font/google";
import { useSelector } from "react-redux";
import Home from "../components/Home";
import Login from "../components/Login";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Index() {
  const user = useSelector((state) => state.user.value);

  return <>{user.token ? <Home /> : <Login />}</>;
}
