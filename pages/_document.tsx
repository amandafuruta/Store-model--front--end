// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
    render() {
        return (
            <Html lang="pt-br">
                <Head>
                    <meta
                        httpEquiv="Content-Type"
                        content="text/html; charset=utf-8"
                    />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="theme-color" content="#000000" />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="48x48"
                        href="/favicon.ico"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
