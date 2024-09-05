import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Aquí puedes agregar tus enlaces a fuentes, iconos, etc. */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="description" content="Una aplicación web con Next.js y TypeScript" />
                </Head>
                <body>
                    {/* Aquí va el contenido principal de tu aplicación */}
                    <Main />
                    {/* Scripts de Next.js para la funcionalidad del cliente */}
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
