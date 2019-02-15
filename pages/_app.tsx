import React from "react";
import App, { Container, NextAppContext } from "next/app";

class CoreApp extends App {
    public static async getInitialProps({ Component, ctx, router }: NextAppContext) {
        let pageProps: any = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return {
            pageProps,
        };
    }
    public render () {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default CoreApp;