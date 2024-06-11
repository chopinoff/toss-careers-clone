import type { Metadata } from 'next';
import StyledComponentsRegistry from './registry';
import './_styles/reset.css';
import './_styles/global.css';
import { WindowSizeProvider } from './_context/WindowSizeContext';
import NavgationBar from './_components/NavigationBar/NavigationBar';
import { NavbarColorProvider } from './_context/NavbarColorContext';

export const metadata: Metadata = {
  title: '토스채용',
  description: '토스 채용 페이지 클론코딩입니다.',
  icons: {
    icon: '/images/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WindowSizeProvider>
      <html lang="en">
        <body>
          <StyledComponentsRegistry>
            <NavgationBar />
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </WindowSizeProvider>
  );
}
