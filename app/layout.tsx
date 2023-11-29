import './ui/global.css'
import { montserrat } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <h1>Este es el layout</h1>
        <div>
        {children} </div></body>
    </html>
  );
}
