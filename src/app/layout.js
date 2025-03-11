import { DM_Sans } from "next/font/google";
import "./globals.css";

// Configure DM Sans font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500", // Medium weight
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "SIBANTUIN",
  description: "Your dedicated service platform",
  icons: {
    icon: [
      {
        url: '/ic_sibantuin.svg',
        type: 'image/svg+xml',
      }
    ]
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
      <body className={dmSans.variable}>
        {children}
      </body>
    </html>
  );
}