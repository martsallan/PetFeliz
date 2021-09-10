import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <link rel="preconnect" href="https://fonts.gstatic.com" />
               <link
                  href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap"
                  rel="stylesheet"
               />
               <link rel="shortcut icon" href="/favicon.png" type="image/png" />
               <link
                  rel="stylesheet"
                  type="text/css"
                  charSet="UTF-8"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
               />
               <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
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
