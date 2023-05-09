import UserContextProvider from "@/context/UserContext";
import { useRouter } from "next/router";
import { useContext } from "react";
import UserContext from "@/context/UserContext";
import Footer from "../components/layout/footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { user } = useContext(UserContext);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
