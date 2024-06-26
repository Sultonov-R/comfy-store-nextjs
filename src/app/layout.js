import { Inter } from "next/font/google";
import "./globals.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div className="container">
            <div className="header_top">
              <a href="/sign_in">Sign In/Guest</a>
              <a href="/create_account">Create Account</a>
            </div>
          </div>
        </header>
        <div className="navbar">
          <div className="container">
            <div className="logo">
              <a href="/" >C</a>
            </div>
            <div className="nav-head">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/products">Products</a>
              <a href="/cart">Cart</a>
            </div>
            <div className="icons">
              <span>
                <FontAwesomeIcon icon={faMoon} className='fa-moon' />
              </span>
              <span><FontAwesomeIcon icon={faCartShopping} className="fa-cart" /></span>
            </div>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}