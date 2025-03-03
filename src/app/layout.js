import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "SIBANTUIN",
  description: "Your dedicated service platform",
  icon: {
    icon: '/ic_sibantuin.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Flowbite Icons CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite-icons/1.0.0/flowbite-icons.min.css"
        />
      </head>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}