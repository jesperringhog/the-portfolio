module.exports = {
  multipass: true,
  plugins: [
    "removeDimensions",
    "removeXMLNS",
    "removeStyleElement",
    "convertStyleToAttrs",
    {
      name: "convertColors",
      params: {
        currentColor: true,
      },
    },
  ],
};