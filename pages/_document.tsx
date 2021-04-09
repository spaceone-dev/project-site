import Document, {
    Html,
    Main,
    NextScript,
    DocumentContext,
    Head,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta property="og:image" content="/assets/ogimg.png" />
                    <meta property="og:type" content="website" />
                    <meta name="author" content="Team CloudONE Crews" />
                    <link rel="shortcut icon" type="image/x-icon" href="/assets/favicon_v2.ico" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
