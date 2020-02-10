module.exports = {
  production: {
    port: 80,
    env: "production",
    devtool: "source-map",
    noHash: false,
    httpHost: "http://47.111.171.66:9000/"
  },
  development: {
    port: 9000,
    env: "development",
    devtool: "eval-source-map",
    noHash: true,
    httpHost: "http://localhost:9000/"
  }
}