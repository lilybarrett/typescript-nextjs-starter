import Document, { Main, Head, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
    public render () {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <link rel="stylesheet" href="/static/reset.css" />
                    <link rel="stylesheet" href="/static/bootstrap-grid.css" />
                    <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        );
    }
}
