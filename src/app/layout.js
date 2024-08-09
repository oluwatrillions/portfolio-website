import Header from "@/components/header/Header";
import "./globals.css";


export const metadata = {
  title: "Oluwatrillion's Portfolio",
  description: "You can learn more about me and my expertise here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        </body>
    </html>
  );
}
