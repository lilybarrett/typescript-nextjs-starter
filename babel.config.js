module.exports = (api) => {
    api.cache(true);

    const presets = [
        "next/babel",
        "@zeit/next-typescript/babel",
    ];

    const plugins = [
        "emotion",
    ];

    return {
        presets,
        plugins,
    };
}