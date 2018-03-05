const withTs = require("@zeit/next-typescript");
const styledComponents = require("styled-components");
module.exports = withTs({styledComponents, "ssr": true, "displayName": true, "preprocess": false });