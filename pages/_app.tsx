import Modal from "@/components/Modal";
import Layout from "../components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LoginMdal from "@/components/modals/LoginMdal";
import RegisterMdal from "@/components/modals/RegisterModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RegisterMdal />
      <LoginMdal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
