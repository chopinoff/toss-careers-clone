import type { Metadata } from 'next';
import './_styles/reset.css';

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
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
