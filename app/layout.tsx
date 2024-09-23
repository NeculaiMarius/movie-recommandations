
import type { Metadata } from "next";
import './globals.css';
import './globalicons.css';


export const metadata: Metadata = {
    title: "Movie Recommandation",
    description: "This is a platform special for you when you don't know what to watch",
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
    <html lang="en">
        <body >{children}</body>
    </html>
    );
}