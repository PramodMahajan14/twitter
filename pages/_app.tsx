import Modal from "@/components/Modal";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const Layout = dynamic(() => import("../components/Layout"), {
  ssr: false,
  loading: () => <LayoutSkeleton />,
});

import LoginMdal from "@/components/modals/LoginMdal";
import RegisterMdal from "@/components/modals/RegisterModal";
import dynamic from "next/dynamic";
import LayoutSkeleton from "@/components/skeletons/LayoutSkeleton";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterMdal />
      <LoginMdal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
