import Document, { Html, Head, Main, NextScript } from 'next/document';
import { useRouter } from 'next/router';

class MyDocument extends Document {
    render() {
        const router = useRouter();
        const basePath = router.basePath || '';

        return (
            <Html>
                <Head>
                    <link
                        href={`https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;600&family=Merriweather:wght@300;400&display=swap`}
                        rel="stylesheet"
                    />
                    <link rel="stylesheet" href={`${basePath}/css/style.css`} />
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
