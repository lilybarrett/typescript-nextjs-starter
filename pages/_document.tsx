import Document, { Main, Head, NextScript } from "next/document";
import * as React from "react";
import "reflect-metadata";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    public static getInitialProps ({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage( (App) => (props) => sheet.collectStyles(<App {...props}/>));
        const styleTags = sheet.getStyleElement();
        return {...page, styleTags};
    }

    public render () {
        return (
            <html>
                <Head>
                    <title>TypeScript React GraphQL Client</title>
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        );
    }
}
