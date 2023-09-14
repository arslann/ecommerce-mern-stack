import './globals.css';

import Navbar from '../components/Navbar';
import { Providers } from './store/provider';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden ">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
