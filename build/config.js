module.exports = {
  production: {
    port: 80,
    env: "production",
    devtool: "source-map",
    noHash: false
  },
  development: {
    port: 9000,
    env: "development",
    devtool: "eval-source-map",
    noHash: true
  }
}