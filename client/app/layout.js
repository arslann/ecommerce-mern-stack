import './globals.css';

import Navbar from '../components/Navbar';
import { Providers } from './store/provider';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body className="overflow-x-hidden">
        <Providers>
          <div className="container mx-auto font-serif">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
