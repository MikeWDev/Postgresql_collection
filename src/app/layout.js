import localFont from "next/font/local";
import "../scss/index.scss";
const freeMan = localFont({ src: "../../public/Freeman-Regular.ttf" });

export const metadata = {
  title: "PSQL Collection",
  description: "Collection of postgres apps",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className={freeMan.className}>{children}</body>
    </html>
  );
}
