import { Roboto } from "next/font/google";
import "./globals.css";
// import { Cedarville_Cursive } from "next/font/google";

const roboto = Roboto({
  subsets:["latin"],
  variable:"--font-roboto",
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-robot"
      >
        {children}
      </body>
    </html>
  );
}
