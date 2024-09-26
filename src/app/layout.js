
import "./globals.css";
import Navbar from './gui/navbar';
import Footer from './gui/footer';


export const metadata = {
  title: "Tetrada",
  description: "Agencia de marketing",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="genos-font-600">
      <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
      </body>
      
    </html>
  );
}
