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
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <link rel="stylesheet" href="/static/css/reset.css" />
                    <link rel="stylesheet" href="/static/css/bootstrap-grid.css" />
                    <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet"/>
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
