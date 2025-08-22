export default function RootLayout({children,}:{children: React.ReactNode}) {
    return (
        <html lang="en">
            <head>
                <title>Grant Pedersen</title>
                <meta charSet="utf-8" />
                <link href="https://fonts.cdnfonts.com/css/convection" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}