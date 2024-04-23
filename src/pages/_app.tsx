import NavbarView from "@/component/fragments/Navbar/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/router";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  }
})

const disableNavbar = ["auth", "admin"];

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { pathname } = useRouter();

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
      <div className={poppins.className}>
        {!disableNavbar.includes(pathname.split("/")[1]) && <NavbarView />}
        <Component {...pageProps} />
      </div>
      </ThemeProvider>
    </SessionProvider>
  );
}
