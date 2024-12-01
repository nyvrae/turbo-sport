import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body className='font-unbounded'>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}