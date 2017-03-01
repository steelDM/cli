const koa = require('koa');
const logger = require('koa-logger');
const webpack = require('webpack');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
const webpackConfig = require('./webpack.dev.config');
const staticServe = require('koa-static')('resource/');

const port = process.env.PORT || 3000;
const app = koa();
const compiler = webpack(webpackConfig);

app.use(logger());
app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
}));
app.use(webpackHotMiddleware(compiler));
app.use(staticServe);

module.exports = app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening on port 3000');
});
